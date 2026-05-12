import NavBar from "../components/NavBar";
import recipes from "../data/recipes";

export default function Gallery() {
  return (
    <div style={{ padding: "20px" }}>
      
      {/* ⭐ Global Navigation Bar */}
      <NavBar />

      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Recipe Gallery
      </h1>

      {/* ⭐ Recipe Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            onClick={() => (window.location.href = `/recipe/${recipe.id}`)}
            style={{
              textDecoration: "none",
              color: "inherit",
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              background: "#fff",
              cursor: "pointer"
            }}
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover"
              }}
            />
            <div style={{ padding: "10px" }}>
              <h3>{recipe.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* ⭐ Centered Back Button */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button
          onClick={() => window.history.back()}
          style={{
            padding: "10px 20px",
            backgroundColor: "#444",
            color: "white",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          ← Back
        </button>
      </div>

    </div>
  );
}
