import TestimonialCard from './CardInfo/TestimonialCard';

const reviews = [
  { name: "Michael Caldwell", description: "Best Mediterranean food I've ever had. The flavors are bold and authentic." },
  { name: "Casey Lau", description: "None of the other places I've tried beats Little Lemon in flavor and texture." },
  { name: "Tyler Tohmine", description: "The food here was fire! Everyone in Chicago should try this place." },
  { name: "Brian Dean", description: "I came in after a 5-hour flight. This food tasted like a warm welcome home." },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2>What Our Guests Say</h2>
      <div className="testimonials-grid">
        {reviews.map((r) => (
          <TestimonialCard key={r.name} name={r.name} description={r.description} />
        ))}
      </div>
    </section>
  );
}
