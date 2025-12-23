import { useState } from "react";
import "./admin.css";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const res = await fetch(
        "http://localhost/anime-api/addProduct.php",
        {
          method: "POST",
          body: formData, // 🚨 NO headers here
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("Product added successfully");
        window.location.href = "/";
      } else {
        alert("Failed to add product");
      }
    } catch (err) {
      alert("Server error");
      console.error(err);
    }
  };

  return (
    <div className="outer">
      <div className="admin">
        <h1>Admin Panel</h1>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Product Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          {/* ✅ FILE INPUT */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <button type="submit" className="uiverse">
            ADD
          </button>
        </form>
      </div>
    </div>
  );
}
