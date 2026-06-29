import GreekSalad from '../../assets/food/greek-salad.webp';
import Bruschetta from '../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../assets/food/lemon-dessert.webp';
import food4 from '../../assets/food/food4.webp';
import food5 from '../../assets/food/food5.jpeg';
import SpecialCard from "../sections/headingPages/CardInfo/SpecialCard";

const items = [
  { image: GreekSalad, name: "Greek Salad", price: "$12.99", description: "Refreshing tomatoes, feta, olives, cold-pressed olive oil." },
  { image: Bruschetta, name: "Bruschetta", price: "$16.99", description: "Sourdough crostini with vine tomatoes, prosciutto, aged parmesan." },
  { image: LemonDessert, name: "Lemon Dessert", price: "$8.50", description: "Fresh-baked lemon cake with citrus zest and powdered sugar." },
  { image: food4, name: "Daily Pasta", price: "$14.99", description: "Handmade pasta with chef's daily sauce. Ask your server for today's selection." },
  { image: food5, name: "Mediterranean Platter", price: "$22.99", description: "A sharing board of hummus, pita, olives, and seasonal mezze." },
];

export default function Order() {
  return (
    <>
      <div className="page-hero">
        <h1>Order Online</h1>
        <p>Fresh Mediterranean delivered to your door.</p>
      </div>
      <div className="specials-section">
        <div className="specials-grid">
          {items.map((item) => <SpecialCard key={item.name} {...item} />)}
        </div>
      </div>
    </>
  );
}
