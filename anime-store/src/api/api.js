export async function getProducts() {
  const res = await fetch("http://localhost/your-php/getProducts.php");
  return res.json();
}
