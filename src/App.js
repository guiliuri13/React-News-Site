import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Navbar from "./components/navbar/navbar"
import Bottom from "./components/bottom/bottom"
import Top from "./components/header/top"
import Notices from "./components/notices/notices"

function App() {
  // const [post,setPosts] = useState([]);

  // useEffect(()=>{
  //   axios.get('https://localhost/php/index.php')
  //   .then(function(res){
  //     setPosts(res.data)
  //   })
  // },[])
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <Top/>
      <Notices/>
      <Bottom/>
    </div>
  );
}

export default App;