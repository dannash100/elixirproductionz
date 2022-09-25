import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const handleClick = () => {
     navigate("/work");
  };
  return (
    <div className="App">
      <img onClick={handleClick} className="logo" src="logo.png" />
      <video playsInline id="video" className="video" muted autoPlay controls loop>
        <source src="final.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default App;
