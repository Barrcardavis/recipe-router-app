export default function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px",
        backgroundColor: "#333",
        color: "white",
        fontSize: "18px"
      }}
    >
      <span
        style={{ cursor: "pointer" }}
        onClick={() => (window.location.href = "/")}
      >
        Home
      </span>

      <span
        style={{ cursor: "pointer" }}
        onClick={() => (window.location.href = "/gallery")}
      >
        Gallery
      </span>
    </nav>
  );
}
