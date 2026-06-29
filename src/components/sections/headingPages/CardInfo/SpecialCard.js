import { Link } from 'react-router-dom';

export default function SpecialCard({ image, name, price, description }) {
  return (
    <article className="menu-card">
      <img src={image} alt={name} />
      <div className="menu-card-body">
        <div className="menu-card-top">
          <h3>{name}</h3>
          <span className="menu-card-price">{price}</span>
        </div>
        <p>{description}</p>
        <Link className="menu-card-footer" to="/order">
          Order for Delivery
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </article>
  );
}
