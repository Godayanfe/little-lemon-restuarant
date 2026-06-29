export default function TestimonialCard({ name, description }) {
  return (
    <article className="testimonial-card">
      <div className="stars">★★★★★</div>
      <p>"{description}"</p>
      <h4>— {name}</h4>
    </article>
  );
}
