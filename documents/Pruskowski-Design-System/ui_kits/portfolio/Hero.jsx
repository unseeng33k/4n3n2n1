// Hero.jsx — Large display headline + footer info cells
Object.assign(window, { Hero, SectionHeader });

function Hero() {
  return (
    <section style={heroStyles.hero}>
      <div style={heroStyles.headlineWrap}>
        <h1 style={heroStyles.headline}>
          Brands to <em style={{fontStyle:'italic', color:'#D32F2F'}}>Billions.</em>
        </h1>
      </div>
      <div style={heroStyles.footer}>
        <div style={heroStyles.cell}>
          <div style={heroStyles.cellLabel}>What I Do</div>
          <div style={heroStyles.cellValue}>Healthcare brand strategy, omnichannel engagement, and systems thinking to drive revenue at scale.</div>
        </div>
        <div style={{...heroStyles.cell, borderRight: '1px solid rgba(17,17,17,0.13)'}}>
          <div style={heroStyles.cellLabel}>Latest Insights</div>
          <div style={heroStyles.cellValue}>
            <a href="https://linkedin.com/in/mpruskowski" target="_blank" style={{textDecoration:'none',color:'inherit'}}>View my latest posts on LinkedIn →</a><br/>
            <a href="https://github.com/unseeng33k" target="_blank" style={{textDecoration:'none',color:'inherit',marginTop:4,display:'block'}}>See my latest commits on GitHub →</a>
          </div>
        </div>
        <div style={{...heroStyles.cell, borderRight: 'none'}}>
          <div style={heroStyles.cellLabel}>Download</div>
          <div style={{...heroStyles.cellValue, marginBottom: 24}}>I am a healthcare brand strategist with 20+ years driving revenue, redefining categories, and building organizations that scale.</div>
          <a href="#" style={heroStyles.btnFill}>Download Resume →</a>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ num, title, right }) {
  return (
    <div style={heroStyles.sectionRow}>
      <span style={heroStyles.sectionTag}>{num} — {title}</span>
      {right && <span style={heroStyles.sectionTag}>{right}</span>}
    </div>
  );
}

const heroStyles = {
  hero: {
    paddingTop: 52, borderBottom: '1px solid rgba(17,17,17,0.13)',
    display: 'flex', flexDirection: 'column',
  },
  headlineWrap: { padding: '10rem 2rem 3rem' },
  headline: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(5rem, 12.5vw, 13rem)',
    fontWeight: 300, lineHeight: 0.9, letterSpacing: '-0.03em', color: '#111',
  },
  footer: {
    display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
    borderTop: '1px solid rgba(17,17,17,0.13)',
  },
  cell: { padding: '1.75rem 2rem', borderRight: '1px solid rgba(17,17,17,0.13)' },
  cellLabel: {
    fontFamily: "'Space Mono', monospace", fontSize: 9, letterSpacing: '0.2em',
    textTransform: 'uppercase', color: 'rgba(17,17,17,0.42)', marginBottom: 10,
  },
  cellValue: {
    fontSize: 14, fontWeight: 500, color: '#111', lineHeight: 1.5,
  },
  btnFill: {
    display: 'inline-flex', alignItems: 'center', padding: '11px 22px',
    fontFamily: "'Space Mono', monospace", fontSize: 10, fontWeight: 700,
    letterSpacing: '0.1em', textTransform: 'uppercase',
    background: '#D32F2F', border: '1px solid #D32F2F', color: '#fff',
    textDecoration: 'none', cursor: 'pointer',
  },
  sectionRow: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '1.1rem 2rem', borderBottom: '1px solid rgba(17,17,17,0.13)',
    background: '#D32F2F',
  },
  sectionTag: {
    fontFamily: "'Space Mono', monospace", fontSize: 9.6, letterSpacing: '0.2em',
    textTransform: 'uppercase', color: '#fff',
  },
};
