export default function About() {
  return (
    <section style={{padding: '80px 5vw', background: 'var(--white)'}}>
      <div className="about-section">
        <div className="about-text">
          <span className="section-label">Our Story</span>
          <h2>Little Lemon</h2>
          <h3>Chicago, Since 1995</h3>
          <p>Little Lemon was opened in 1995 by two Italian brothers, Adrian and Mario. Noticing the lack of authentic Mediterranean cuisine in Chicago, they brought the flavors of their hometown in Italy to the people of this city. Nearly thirty years later, both brothers still oversee the kitchen every day.</p>
          <a className="btn-primary" href="/about">Meet the Family</a>
        </div>
        <div className="about-images">
          <img className="about-img-main" src={require('../../../assets/food/food3.jpeg')} alt="Little Lemon interior" />
          <img className="about-img-secondary" src={require('../../../assets/food/food2.jpeg')} alt="Little Lemon cuisine" />
        </div>
      </div>
    </section>
  );
}
