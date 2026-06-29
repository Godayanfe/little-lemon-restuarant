import GreekSalad from '../../../assets/food/greek-salad.webp';
import Bruschetta from '../../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../../assets/food/lemon-dessert.webp';
import SpecialCard from './CardInfo/SpecialCard';

export default function Specials() {
  return (
    <section className="specials-section">
      <div className="section-header">
        <h2>This Week's Specials</h2>
        <a className="btn-outline" href={require('../../../assets/menu.webp')} target="_blank" rel="noreferrer">Full Menu</a>
      </div>
      <div className="specials-grid">
        <SpecialCard image={GreekSalad} name="Greek Salad" price="$12.99"
          description="Refreshing tomatoes, crisp lettuce, creamy feta, and brined olives. Finished with flaky salt and cold-pressed olive oil." />
        <SpecialCard image={Bruschetta} name="Bruschetta" price="$16.99"
          description="Sourdough crostini topped with vine tomatoes, prosciutto, and aged parmesan. A perfect introduction to the table." />
        <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$8.50"
          description="Fresh-baked lemon cake dusted in powdered sugar and citrus zest. Sunshine in every bite." />
      </div>
    </section>
  );
}
