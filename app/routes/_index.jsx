import { Link } from "react-router";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />

      {/* ⭐ Hero section with overlay text */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "1000px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center"
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "40px",
            borderRadius: "20px"
          }}
        >
          <h1 style={{ fontSize: "52px", marginBottom: "10px" }}>
            Welcome to Recipe App
          </h1>
          <p style={{ fontSize: "22px" }}>
            Explore delicious recipes in the gallery.
          </p>
        </div>
      </div>
    </div>
  );
}
