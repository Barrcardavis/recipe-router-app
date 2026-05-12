import { useParams } from "react-router";
import { Link } from "react-router";
import recipes from "../data/recipes.js";

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) {
    return <h1>Recipe not found</h1>;
  }

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        textAlign: "center"
      }}
    >
      {/* ⭐ Back to Gallery link */}
      <Link
        to="/gallery"
        style={{
          display: "inline-block",
          marginBottom: "20px",
          fontSize: "18px",
          textDecoration: "none",
          color: "#007bff"
        }}
      >
        ← Back to Gallery
      </Link>

      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
        {recipe.title}
      </h1>

      <img
  src={recipe.image}
  alt={recipe.title}
  style={{
    width: "100%",
    maxWidth: "600px",
    height: "300px",
    objectFit: "cover",
    display: "block",
    margin: "0 auto 20px"
  }}
/>


      {/* ⭐ Bigger, bold section headers */}
      <h2 style={{ fontSize: "30px", fontWeight: "bold", marginTop: "30px" }}>
        Ingredients
      </h2>

      <ul
        style={{
          textAlign: "left",
          display: "inline-block",
          marginTop: "10px",
          fontSize: "18px"
        }}
      >
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 style={{ fontSize: "30px", fontWeight: "bold", marginTop: "30px" }}>
        Instructions
      </h2>

      <p
        style={{
          textAlign: "left",
          display: "inline-block",
          marginTop: "10px",
          lineHeight: "1.6",
          fontSize: "18px"
        }}
      >
        {recipe.instructions}
      </p>
    </div>
  );
}
