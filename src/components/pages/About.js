export default function About() {
  return (
    <>
      <div className="page-hero">
        <h1>Our Story</h1>
        <p>Thirty years of Mediterranean hospitality in the heart of Chicago.</p>
      </div>
      <div style={{padding: '0 5vw 80px', maxWidth:'760px', margin:'0 auto'}}>
        <p style={{fontSize:'1.1rem', lineHeight:'1.9', color:'var(--muted)', marginBottom:'24px'}}>
          Little Lemon was opened in 1995 by two Italian brothers, Adrian and Mario. Despite Chicago's diversity, the brothers recognised the lack of authentic Mediterranean cuisine in the city, and were inspired to bring the flavors of their hometown in Italy to the people of Chicago.
        </p>
        <p style={{fontSize:'1.1rem', lineHeight:'1.9', color:'var(--muted)'}}>
          Nearly thirty years later, both brothers still oversee every plate that leaves the kitchen. The family recipes have not changed. The welcome has only grown warmer.
        </p>
      </div>
    </>
  );
}
