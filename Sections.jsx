// Sections.jsx — Marquee, Pillars, Services, Quote, CTA, Contact, Footer

// Inline SVG icons — replaces Material Symbols ligature approach (unreliable in iframes)
const ICONS = {
  legend_toggle: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
  integration_instructions: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="1"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="13" y2="12"/><path d="M8 16 L10 14 L8 12"/></svg>`,
  person_check: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>`,
  account_tree: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="9" width="5" height="5"/><rect x="9" y="3" width="5" height="5"/><rect x="9" y="16" width="5" height="5"/><rect x="18" y="9" width="5" height="5"/><line x1="6" y1="11.5" x2="9" y2="5.5"/><line x1="6" y1="11.5" x2="9" y2="18.5"/><line x1="14" y1="5.5" x2="18" y2="11.5"/><line x1="14" y1="18.5" x2="18" y2="11.5"/></svg>`,
  trending_up: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  monitor_heart: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="1"/><line x1="7" y1="21" x2="17" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><polyline points="7 10 9.5 7 11.5 13 13.5 10 16 10"/></svg>`,
  auto_awesome: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  groups: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M2 20v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1"/><circle cx="18" cy="8" r="2.5"/><path d="M16 20v-.5a3.5 3.5 0 0 0-1.5-2.9"/></svg>`,
};

function MatIcon({ name }) {
  return <span style={{display:'block',marginBottom:20,color:'#D32F2F',lineHeight:1}} dangerouslySetInnerHTML={{__html: ICONS[name] || ''}} />;
}

Object.assign(window, { MarqueeStrip, BrandStrip, ApproachSection, ServicesSection, QuoteSection, CTABand, ContactSection, Footer });

function MarqueeStrip() {
  const items = ['Strategic Insight','Omnichannel Design','Patient Engagement','Rare Disease Expertise','Systems Thinking','DTC Strategy','Revenue Growth','Brand Narrative'];
  const doubled = [...items, ...items];
  return (
    <div style={{borderBottom:'1px solid rgba(17,17,17,0.13)', padding:'0.85rem 0', overflow:'hidden'}}>
      <div style={{display:'flex', animation:'marquee 32s linear infinite', width:'max-content'}}>
        {doubled.map((item, i) => (
          <div key={i} style={{display:'flex',alignItems:'center',gap:24,padding:'0 48px',fontFamily:"'Space Mono',monospace",fontSize:9.6,letterSpacing:'0.2em',textTransform:'uppercase',color:'rgba(17,17,17,0.42)',whiteSpace:'nowrap'}}>
            <span style={{width:3,height:3,background:'#D32F2F',flexShrink:0,display:'inline-block'}}></span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function BrandStrip() {
  const brands = ['DUPIXENT','BEYFORTUS','NARCAN','ENTRESTO','AIMOVIG','KEYTRUDA','JARDIANCE','SPIRIVA'];
  const doubled = [...brands, ...brands];
  return (
    <div style={{borderBottom:'1px solid rgba(17,17,17,0.13)', padding:'2rem 0', overflow:'hidden'}}>
      <div className="marquee-animated" style={{display:'flex', width:'max-content'}}>
        {doubled.map((b, i) => (
          <span key={i} style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:'clamp(1rem,2vw,1.4rem)',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'rgba(17,17,17,0.13)',whiteSpace:'nowrap',padding:'0 3.5rem'}}>
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

const pillars = [
  { icon: 'legend_toggle', num: '01 / NARRATIVE', title: 'Brand Narrative Leadership', desc: 'Own narrative and messaging systems. Translate clinical complexity into clear, compelling stories. Align positioning across HCP, patient, and caregiver audiences.' },
  { icon: 'integration_instructions', num: '02 / INTEGRATION', title: 'Integrated Strategy', desc: 'Connect disease education to brand engagement. Build ecosystems that move patients from awareness to action.' },
  { icon: 'person_check', num: '03 / PATIENT FIRST', title: 'Patient-Centered Design', desc: 'Design patient journeys and identify barriers and decision triggers. Rare disease ecosystems are my specialty.' },
  { icon: 'account_tree', num: '04 / SYSTEMS THINKING', title: 'Turn Complexity into Advantage', desc: 'Turn multi-stakeholder complexity into actionable frameworks. Connect disparate strategic elements into unified, coherent plans.' },
];

function ApproachSection() {
  return (
    <section id="approach">
      <div style={secStyles.grid2} data-approach-grid>
        <div style={{...secStyles.padded, borderRight:'1px solid rgba(17,17,17,0.13)'}}>
          <h2 style={secStyles.h2}>Brand Strategy:<br/>Transform complexity into <em style={{fontStyle:'italic'}}>clarity.</em></h2>
          <p style={secStyles.body}>20+ years blending strategy, design, and technology to move patients from awareness to action.</p>
        </div>
        <div style={{display:'grid'}} data-approach-pillars>
          {pillars.map((p, i) => (
            <div key={i} style={{...secStyles.pillar, borderRight: i%2===0 ? '1px solid rgba(17,17,17,0.13)' : 'none', borderBottom: i<2 ? '1px solid rgba(17,17,17,0.13)' : 'none'}}>
              <MatIcon name={p.icon} />
              <div style={secStyles.pillarNum}>{p.num}</div>
              <h3 style={secStyles.h3}>{p.title}</h3>
              <p style={secStyles.smallBody}>{p.desc}</p>
              <a href="#contact" style={secStyles.pillarLink}>Explore →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: 'trending_up', num: 'Growth', name: 'Drive Revenue', desc: 'Developed strategy and customer-centric capabilities that drove organic revenue growth, contributing to 2 agency acquisitions by leading holding companies.' },
  { icon: 'monitor_heart', num: 'Margins', name: 'Maximize ROI', desc: 'Leveraged data-driven approach to identify high-return segments and optimize real-time media choices, maximizing ROAS.' },
  { icon: 'auto_awesome', num: 'Positioning', name: 'Radically Differentiate', desc: 'Strategically repositioned blockbuster brands within pivotal cultural moments by identifying unique insights and innovative technologies.' },
  { icon: 'groups', num: 'Scale', name: 'Build Organization', desc: 'Spearheaded organizational evolution by establishing Centers of Excellence and unified governance frameworks to optimize portfolio-level ROI.' },
];

function ServicesSection() {
  return (
    <section id="services">
      <div style={{display:'grid', borderBottom:'1px solid rgba(17,17,17,0.13)'}} data-services-header>
        <div style={{...secStyles.padded, borderRight:'1px solid rgba(17,17,17,0.13)'}}>
          <h2 style={secStyles.h2}>Healthcare Brand<br/>Leadership & <em style={{fontStyle:'italic'}}>Strategy.</em></h2>
        </div>
        <div style={{...secStyles.padded, display:'flex', alignItems:'center'}}>
          <p style={secStyles.body}>From rare disease positioning to blockbuster brand management, I've led strategy for some of the most impactful medications in the world. Proven track record: revenue growth, margin expansion, category redefinition.</p>
        </div>
      </div>
      <div style={{display:'grid', borderBottom:'1px solid rgba(17,17,17,0.13)'}} data-services-list>
        {services.map((s, i) => (
          <div key={i} style={{...secStyles.service, borderRight: i<3 ? '1px solid rgba(17,17,17,0.13)' : 'none'}}>
            <MatIcon name={s.icon} />
            <div style={secStyles.pillarNum}>{s.num}</div>
            <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:26, fontWeight:300, letterSpacing:'-0.01em', marginBottom:12, color:'#111'}}>{s.name}</div>
            <p style={secStyles.smallBody}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function QuoteSection() {
  return (
    <section className="parallax-animated" style={{padding:'8rem 2rem', background:'rgba(0,0,0,0.03)', borderBottom:'1px solid rgba(17,17,17,0.13)', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(1.5rem,4vw,2.5rem)', fontWeight:400, lineHeight:1.4, color:'#111', fontStyle:'italic', textAlign:'center', maxWidth:800}}>
        "The work isn't done when it ships. It's done when someone, somewhere, quietly trusts it."
      </p>
    </section>
  );
}

function CTABand() {
  return (
    <section style={{background:'#D32F2F', backgroundImage:"linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=85&fit=crop')", backgroundSize:'cover', backgroundPosition:'center', borderBottom:'1px solid rgba(17,17,17,0.13)'}}>
      <div style={{display:'grid', alignItems:'center', gap:'4rem', padding:'5rem 2rem'}} data-cta-band>
        <h2 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(3rem,7vw,8rem)', fontWeight:300, lineHeight:0.9, letterSpacing:'-0.03em', color:'#fff'}}>
          Ready to<br/><em style={{fontStyle:'italic', opacity:0.75}}>Elevate</em><br/>Your Brand?
        </h2>
        <div style={{display:'flex', flexDirection:'column', gap:12, minWidth:200}}>
          <a href="#contact" style={{...secStyles.btn, background:'#fff', borderColor:'#fff', color:'#D32F2F'}}>Let's Talk →</a>
          <a href="#approach" style={{...secStyles.btn, borderColor:'rgba(255,255,255,0.4)', color:'#fff'}}>See Capabilities</a>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [sent, setSent] = React.useState(false);
  const contacts = [
    ['Email','mpruskowski@gmail.com','mailto:mpruskowski@gmail.com'],
    ['Phone','+1 (908) 917-0754','tel:+19089170754'],
    ['LinkedIn','linkedin.com/in/MpruskowskI','https://linkedin.com/in/MpruskowskI'],
    ['GitHub','github.com/unseeng33k','https://github.com/unseeng33k'],
    ['X','x.com/unseeng33k','https://x.com/unseeng33k'],
  ];
  return (
    <section id="contact">
      <div style={{display:'grid', borderBottom:'1px solid rgba(17,17,17,0.13)'}} data-contact-grid>
        <div style={{...secStyles.padded, borderRight:'1px solid rgba(17,17,17,0.13)'}}>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(2.5rem,4.5vw,5rem)', fontWeight:300, lineHeight:0.95, letterSpacing:'-0.02em', marginBottom:32, color:'#111'}}>Let's <em style={{fontStyle:'italic'}}>Connect.</em></h2>
          <p style={{...secStyles.body, marginBottom:40}}>Ready to discuss brand strategy, healthcare market opportunities, or how to scale your organization?</p>
          <div style={{display:'flex', flexDirection:'column', gap:16}}>
            {contacts.map(([label, val, href]) => (
              <div key={label} style={{display:'grid', gridTemplateColumns:'80px 1fr', gap:16, paddingBottom:16, borderBottom:'1px solid rgba(17,17,17,0.13)'}}>
                <span style={secStyles.pillarNum}>{label}</span>
                <a href={href} style={{fontSize:14, fontWeight:500, color:'#111', textDecoration:'none'}}>{val}</a>
              </div>
            ))}
          </div>
        </div>
        <div style={secStyles.padded}>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(2.5rem,4.5vw,5rem)', fontWeight:300, lineHeight:0.95, letterSpacing:'-0.02em', marginBottom:32, color:'#111'}}>Send an <em style={{fontStyle:'italic'}}>Email.</em></h2>
          {sent ? (
            <p style={{...secStyles.body, color:'#D32F2F'}}>Message sent. I'll be in touch soon.</p>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
              {[['Name','text','Your name'],['Email','email','your@email.com']].map(([label, type, ph]) => (
                <div key={label} style={{display:'grid', gridTemplateColumns:'100px 1fr', alignItems:'baseline', gap:32, padding:'1.4rem 0', borderBottom:'1px solid rgba(17,17,17,0.13)'}}>
                  <label style={secStyles.pillarNum}>{label}</label>
                  <input type={type} placeholder={ph} required style={{background:'transparent', border:'none', outline:'none', fontFamily:"'Space Grotesk',sans-serif", fontSize:14, fontWeight:500, color:'#111', width:'100%'}}/>
                </div>
              ))}
              <div style={{display:'grid', gridTemplateColumns:'100px 1fr', alignItems:'baseline', gap:32, padding:'1.4rem 0', borderBottom:'1px solid rgba(17,17,17,0.13)'}}>
                <label style={secStyles.pillarNum}>Message</label>
                <textarea placeholder="Let's discuss how we can work together..." required style={{background:'transparent', border:'none', outline:'none', fontFamily:"'Space Grotesk',sans-serif", fontSize:14, fontWeight:500, color:'#111', width:'100%', resize:'none', height:80}}/>
              </div>
              <div style={{paddingTop:32}}>
                <button type="submit" style={{...secStyles.btn, background:'#D32F2F', borderColor:'#D32F2F', color:'#fff', cursor:'pointer'}}>Send Message →</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{display:'grid', alignItems:'center', gap:32, padding:'1.25rem 2rem', borderTop:'1px solid rgba(17,17,17,0.13)'}} data-footer-grid>
      <a href="#" style={{display:'flex', alignItems:'center', gap:8, fontFamily:"'Space Mono',monospace", fontSize:10, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:'#111', textDecoration:'none'}}>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="#111"><rect width="10" height="10"/></svg>
        Michael Pruskowski
      </a>
      <span style={{fontFamily:"'Space Mono',monospace", fontSize:9.6, color:'rgba(17,17,17,0.42)', letterSpacing:'0.08em'}}>Healthcare strategy. Omnichannel leadership. Systems thinking.</span>
      <span style={{fontFamily:"'Space Mono',monospace", fontSize:9.6, color:'rgba(17,17,17,0.42)'}}>&copy; 2026</span>
    </footer>
  );
}

const secStyles = {
  padded: { padding: '3.5rem 2rem' },
  grid2: { display: 'grid', borderBottom: '1px solid rgba(17,17,17,0.13)' },
  h2: { fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(2rem,3.5vw,3.5rem)', fontWeight:300, lineHeight:1.05, letterSpacing:'-0.02em', color:'#111', marginBottom:16 },
  h3: { fontFamily:"'Cormorant Garamond',serif", fontSize:28, fontWeight:300, lineHeight:1.1, letterSpacing:'-0.01em', marginBottom:14, color:'#111' },
  body: { fontSize:14, color:'rgba(17,17,17,0.42)', lineHeight:1.75 },
  smallBody: { fontSize:13, color:'rgba(17,17,17,0.42)', lineHeight:1.65 },
  pillar: { padding:'3rem 2rem' },
  pillarNum: { fontFamily:"'Space Mono',monospace", fontSize:9, letterSpacing:'0.2em', textTransform:'uppercase', color:'#D32F2F', marginBottom:16 },
  icon: { fontFamily:"'Material Symbols Outlined'", fontSize:22, lineHeight:1, fontVariationSettings:"'FILL' 0,'wght' 300,'GRAD' 0,'opsz' 24", fontFeatureSettings:"'liga'", WebkitFontFeatureSettings:"'liga'", display:'block', marginBottom:20, color:'#D32F2F', fontStyle:'normal', fontWeight:'normal', textTransform:'none', letterSpacing:'normal', wordWrap:'normal', whiteSpace:'nowrap', WebkitFontSmoothing:'antialiased' },
  service: { padding:'2.5rem 2rem' },
  pillarLink: { display:'inline-flex', alignItems:'center', gap:4, marginTop:16, fontFamily:"'Space Mono',monospace", fontSize:9, letterSpacing:'0.16em', textTransform:'uppercase', color:'#D32F2F', textDecoration:'none' },
  btn: { display:'inline-flex', alignItems:'center', padding:'11px 22px', fontFamily:"'Space Mono',monospace", fontSize:10, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', border:'1px solid #111', color:'#111', background:'transparent', textDecoration:'none' },
};
