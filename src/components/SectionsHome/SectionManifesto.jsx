import CardsManifesto from "../Cards/CardsManifesto";
import Cards from "../Cards/CardsMission";
import Button from "../Button/Button";
import "./SectionManifesto.scss";
export default function SectionValues(props) {
  return (
    <section className="manifesto">
      <div className="header">
        <h3>OUR MANIFESTO</h3>
        <Button className="button" label="our values" />
      </div>
      <div className="cards_container">
        <CardsManifesto className="card" heading="Curation" text="Curating essential items so we have what we need, and we use what we have." />
        <CardsManifesto className="card" heading="Local" text="Acting locally we not only put great brands in the spotlight, but we also reduce our carbon footprint by small distances in transport." />
        <CardsManifesto
          className="card"
          heading="Circularity"
          text="Encouraging circularity through teaming up with Mødrehjælpen and Red Barnet shops, where you can send the items you no longer need, yet are still usable. 
"
        />
        <CardsManifesto
          className="card"
          heading="Community"
          text="Inspiring a sense of community and engaging in conversation, because the journey of parenting is not one we’re alone on and it does take a village.
"
        />
        <CardsManifesto
          className="card"
          heading="Low Carbon"
          text="Facilitating a conscious, low carbon emission footprint. Working with local brands reduces transportation emissions, using overstock products that haven’t found a home and  encouraging circularity.
"
        />
        <CardsManifesto
          className="card"
          heading="Conscious"
          text="Promoting a conscious lifestyle in every sense, from what we buy to how to eat healthier and spend more quality time together as a family.
"
        />
      </div>
    </section>
  );
}