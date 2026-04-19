// Nav.jsx — Fixed navigation with logo, social icons, menu
Object.assign(window, { Nav });

function Nav({ currentPage = 'home' }) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <nav style={navStyles.nav}>
        <a href="#" onClick={e => { e.preventDefault(); setMenuOpen(m => !m); }} style={navStyles.logo}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <rect x="0" y="0" width="5" height="5" fill="#2563eb"/>
            <rect x="5" y="0" width="5" height="5" fill="#dc2626"/>
            <rect x="0" y="5" width="5" height="5" fill="#eab308"/>
            <rect x="5" y="5" width="5" height="5" fill="#16a34a"/>
          </svg>
          Michael Pruskowski
        </a>
        <div style={navStyles.socials}>
          <SocialIcon href="https://x.com/unseeng33k" label="X">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.672-5.829 6.672h-3.307l7.73-8.835L.424 2.25h6.679l4.882 6.479 5.259-6.479zM17.002 20.331h1.834L6.822 4.169H4.881z"/>
          </SocialIcon>
          <SocialIcon href="https://linkedin.com/in/mpruskowski" label="LinkedIn">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.437-.103.249-.129.597-.129.946v5.422h-3.554s.047-8.733 0-9.646h3.554v1.364c.43-.664 1.199-1.609 2.913-1.609 2.122 0 3.714 1.388 3.714 4.373v5.518zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.952.77-1.715 1.921-1.715 1.147 0 1.918.763 1.918 1.715 0 .953-.771 1.715-1.924 1.715zm1.581 11.597H3.715V9.806h3.203v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
          </SocialIcon>
          <SocialIcon href="https://github.com/unseeng33k" label="GitHub">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </SocialIcon>
        </div>
      </nav>
      {menuOpen && (
        <div style={navStyles.menu}>
          {[['/#approach','Approach'],['/work.html','Work'],['/#services','Services'],['/#thought-leadership','Thought Leadership'],['/#contact',"Let's Connect"]].map(([href, label]) => (
            <a key={href} href={href} style={navStyles.menuLink}
               onClick={() => setMenuOpen(false)}
               onMouseEnter={e => e.target.style.color='#111'}
               onMouseLeave={e => e.target.style.color='rgba(17,17,17,0.42)'}>
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

function SocialIcon({ href, label, children }) {
  const [hov, setHov] = React.useState(false);
  return (
    <a href={href} target="_blank" title={label}
       style={{...navStyles.socialIcon, opacity: hov ? 0.8 : 1}}
       onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <svg viewBox="0 0 24 24" fill="white" style={{width:'60%',height:'60%'}}>{children}</svg>
    </a>
  );
}

const navStyles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    height: 52, padding: '0 2rem', display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', background: '#fffafa',
    borderBottom: '1px solid rgba(17,17,17,0.13)',
  },
  logo: {
    display: 'flex', alignItems: 'center', gap: 8,
    fontFamily: "'Space Mono', monospace", fontSize: 11, fontWeight: 700,
    letterSpacing: '0.12em', textTransform: 'uppercase',
    color: '#111', textDecoration: 'none',
  },
  socials: { display: 'flex', gap: 8, alignItems: 'center' },
  socialIcon: {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: 20, height: 20, background: '#000', borderRadius: '50%',
    textDecoration: 'none', transition: 'opacity 0.15s',
  },
  menu: {
    position: 'fixed', top: 52, left: 0, right: 0, zIndex: 99,
    background: '#fffafa', borderBottom: '1px solid rgba(17,17,17,0.13)',
    display: 'flex', flexDirection: 'column',
  },
  menuLink: {
    padding: '1rem 2rem', fontFamily: "'Space Mono', monospace",
    fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
    color: 'rgba(17,17,17,0.42)', textDecoration: 'none',
    borderBottom: '1px solid rgba(17,17,17,0.13)', transition: 'color 0.15s',
  },
};
