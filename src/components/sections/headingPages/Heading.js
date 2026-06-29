import { Link } from 'react-router-dom';

export default function Heading() {
  return (
    <header className="hero">
      <section className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>A family-owned Mediterranean restaurant on Maldove Street. Traditional recipes, a modern soul — every dish tells a story from the old country.</p>
        <Link className="btn-primary" to="/reservations">Reserve a Table</Link>
      </section>

      <div className="hero-image-wrap">
        <img src={require('../../../assets/food/food1.png')} alt="Little Lemon signature dish" />
        <div className="hero-badge">
          <span style={{fontSize:'1.4rem'}}>🍋</span>
          <span>Est.</span>
          <span>1995</span>
        </div>
      </div>
    </header>
  );
}
