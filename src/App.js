import React from 'react';
import './App.css';
import logoo from './logoo.jpg';
import vegeta from './vegeta.mp4'

function App() {
  return (
    <div className="app" >
     <div style={{border: "solid 1px black", maxwidth:"100vw", color:"aqua", textAlign:"center" }}>

<h1 className="title red">Yousseftanzekhti</h1>
<h2> how are you ?</h2>
<br />

<img src={logoo  } style={{height:"250px"}} />

<br />

<img src="\1_Z14pvsjLwMRE0KV2HhU_LA.png" style={{height: "250px"}} />

</div>

<video width="320" height="240" controls >

<source src={vegeta.mp4} type="video/mp4" />

</video>
</div>
  )
};

export default App;
