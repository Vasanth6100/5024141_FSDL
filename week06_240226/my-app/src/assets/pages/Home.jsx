import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome to Home Page 🎉</h1>

      <button onClick={() => navigate("/")}>
        Logout
      </button>
    </div>
  );
}

export default Home;