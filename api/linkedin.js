const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes
let cachedPost = null;
let cacheTime = 0;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'public, s-maxage=300');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Check cache
    if (cachedPost && Date.now() - cacheTime < CACHE_DURATION) {
      return res.status(200).json(cachedPost);
    }

    const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
    const personUrn = process.env.LINKEDIN_PERSON_URN;

    if (!accessToken || !personUrn) {
      throw new Error('LinkedIn credentials not configured');
    }

    // Fetch user's posts using /ugcPosts endpoint
    const postsResponse = await fetch(
      `https://api.linkedin.com/v2/ugcPosts?q=authors&authors=List(${encodeURIComponent(personUrn)})&sort=RECENCY`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json'
        }
      }
    );

    if (!postsResponse.ok) {
      console.error('LinkedIn posts fetch failed:', postsResponse.status);
      throw new Error(`LinkedIn API error: ${postsResponse.status}`);
    }

    const postsData = await postsResponse.json();
    const posts = postsData.elements || [];

    if (posts.length === 0) {
      const fallback = {
        title: 'Healthcare brand strategy insights',
        content: 'Healthcare brand strategy, omnichannel engagement, and systems thinking.',
        url: 'https://www.linkedin.com/in/michaelpruskowski/',
        timestamp: new Date().toISOString(),
        fallback: true
      };
      cachedPost = fallback;
      cacheTime = Date.now();
      return res.status(200).json(fallback);
    }

    // Process the most recent post
    const latestPost = posts[0];
    const commentary = latestPost.specificContent?.['com.linkedin.ugc#ShareContent']?.shareCommentary?.text || '';
    const text = latestPost.specificContent?.['com.linkedin.ugc#ShareContent']?.shareMediaCategory || '';

    const postData = {
      title: commentary.substring(0, 100) || 'Latest insight',
      content: commentary.substring(0, 250),
      url: `https://www.linkedin.com/feed/update/${latestPost.id}/`,
      timestamp: new Date(latestPost.created.time).toISOString(),
      fallback: false
    };

    // Cache the result
    cachedPost = postData;
    cacheTime = Date.now();

    res.status(200).json(postData);
  } catch (error) {
    console.error('LinkedIn API error:', error);

    // Return graceful fallback on error
    const fallback = {
      title: 'Healthcare brand strategy',
      content: 'Healthcare brand strategy, omnichannel engagement, and systems thinking.',
      url: 'https://www.linkedin.com/in/michaelpruskowski/',
      timestamp: new Date().toISOString(),
      fallback: true
    };

    cachedPost = fallback;
    cacheTime = Date.now();
    res.status(200).json(fallback);
  }
}
