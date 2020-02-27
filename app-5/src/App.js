import React, {Component} from 'react'
import './App.css'
import Image from './Image'

class App extends Component{
  
  render(){
    return (
      <div className='App'>
          <Image url={"https://pm1.narvii.com/7115/82ea2d07349162b93a8deae06be1c4a2898bd69dr1-512-374v2_uhq.jpg"}/>
      </div>
    );
  }
}

export default App;
