import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate()
  const handleClick = () => navigate('/work')
  return (
    <div onClick={handleClick}  className="App">
            <img className='logo' src='logo.png'/>
     <video className='video' autoPlay loop>
  <source src="final.webm" type="video/webm"/>
Your browser does not support the video tag.
</video>
    </div>
  );
}

export default App;
