import ScrollToTop from "../../ScrollToTop";
import Card from "react-bootstrap/Card";

export default function BrandList(props) {
  const brands = props.brands;
  const allBrands = brands.map((brand, i) => (
    <li key={`${brand + i}`}>
      <ScrollToTop />
      <Card
        onClick={() => {
          console.log("button");
          props.setBrand(brand);
        }}
        className="card_brand"
        style={{ width: "18rem" }}
      >
        <Card.Img style={{ objectFit: "cover" }} variant="top" src={`./assets/webP/${brand.img1}`} alt={brand.title} />
        <Card.Body>
          <Card.Title>{brand.title}</Card.Title>
        </Card.Body>
      </Card>
    </li>
  ));

  return (
    <>
      <ul>{allBrands}</ul>
    </>
  );
}
