// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TopList from './components/TopList';
import Banner from './components/Banner';
import OurServices from './components/OurServices';

const bgStyle = {
            backgroundImage : `url(${"pexels.jpg"})`,
            backgroundRepeat : "no-repeat",
            backgroundSize : "cover",
            backgroundPosition : "center",
};


function App() {
  return (
    <div   className="overflow-x-hidden">
        
        <div style={bgStyle} className='min-h-screen bg-white/5  backdrop-blur-md ' >
        <Navbar></Navbar>
      <Hero></Hero>
      <TopList></TopList>
      <Banner></Banner>
      
        </div>
        <OurServices></OurServices>
        
    </div>
  );
}

export default App;
