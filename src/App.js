import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import  Explore  from './Components/Explore';
import AboutUs from './Components/AboutUs';
import SearchBar from './Components/SearchBar';
function App() {
  const [explore,setExplore]=useState(false)
  return (
    <div>
    <div className='frame'>
      <div style={{display:"flex"}}>
    <div style={{width:"50%"}}>
    <div className='spk'>
      <img src='https://t3.ftcdn.net/jpg/04/39/88/88/360_F_439888803_CuJZTXnkyEGw6YuMOOkUn87TrdFkId7K.jpg' style={{width:"100px",borderRadius:"40px"}}/>
    </div>
    </div>
    <div className='grid-container'>
     <div className='grid-item'onClick={()=>{setExplore(true)}}>Explore</div>
     <div className='grid-item'>AboutUs</div>
     <div className='grid-item'>Cities</div>
     <div className='grid-item' style={{}}>Call</div>
    </div>
    </div>
    <div className='content'><p1>Rethink your living and renting</p1></div>
    <div className='tagline'>Make your stay painless with us</div>
    <SearchBar/>
    </div>
    <Explore/>
    <AboutUs/>
    </div>
  );
}

export default App;
