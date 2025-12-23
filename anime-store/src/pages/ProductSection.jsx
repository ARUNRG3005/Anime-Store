import { useEffect, useState } from "react";
import ProductGrid from "../components/ProductGrid";

export default function ProductSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost/anime-api/getProducts.php")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <section id="products">
      <div className="products">
        <h2>Featured Products</h2>
      </div>
      <ProductGrid products={products} />
    </section>
  );
}
