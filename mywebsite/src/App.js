import logo from './logo.svg';
import beverly from './Images/beverly.jpeg'
import fall from './Images/fall.jpeg'
import plants from './Images/plants.jpeg'
import self from './Images/self.jpeg'
import birds from './Images/birds.jpeg'
import cat from './Images/cat.jpeg'
import library from './Images/library.jpeg'
import snow from './Images/snow.jpeg'
import park from './Images/park.jpeg'
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Email from "./components/Email"
import { Component } from 'react';
import axios from 'axios';

class App extends Component{

  

  constructor(props){
    super(props);
    this.state = {
      currPage: "Home",
      data: null
    };
}
  state = {currPage: true}

  
  

  fetchData = () => {

     axios.get("http://jservice.io/api/random")
     .then((response) => {
       console.log(response);
       this.setState({data: response.data[0]})
     }).catch((error) => {
       console.log(error)
     })

 };

 renderData = () => {
  if(this.state.data) {
    return(
      <div className="jeapordyButton">
        <div>Question: {this.state.data.question}</div>
          <div>Answer: {this.state.data.answer}</div>

      </div>
    )
  }else{
    return null
  }
}

  

  //usage of callback functions - pressing "Email" button causes email to appear on screen
  changeCurrPage = (newCurrPage) => {
    console.log(newCurrPage)
    this.setState({
      currPage: newCurrPage,
    })
  }

  renderPage = () => {
    if(this.state.currPage === "Gallery"){
      return <Email/>
    } 
   
  }

  render() {



  return (
    <div className="App">

        
        <Navbar changeCurrPage = {this.changeCurrPage}/>
        {this.renderPage()}
        
        <h1 className="center">Maria Cristoforo</h1>

        <h3 className="center">Dartmouth '24</h3>

        <img src={self} alt="Self" className="selfImg"/>

        <p className="description">Hello! I'm from Beverly MA, a town on the northern coast of Massachusetts. 
            I'm interested in studying CS and statistics at Dartmouth and learning Mandarin Chinese. So far, 
            I have experience in Java, Python, Javascript, HTML, and CSS. Below are some 
            pictures I took and a button to give a random jeapordy question, using a free API. (disclaimer - it's not my cat)
        </p>

            <div className="images">
              <img src={beverly} className="regImg" alt="Beverly"/>
              <img src={park} alt="park" className="regImg"/>
              <img src={birds} alt="birds"  className="regImg"/> 
              <img src={fall} alt="Fall" className="regImg"/>
              <img src={cat} alt="cat" className="regImg"/>
              <img src={snow} alt="snow" className="horizontalImg"/>
              <img src={library} alt="lib" className="regImg"/>
            </div>
            
          

        

        <div className="jeapordyButton">
        <button onClick = {this.fetchData}>click for a jeapordy question</button>
        </div>
        {this.renderData()}

  </div>

  );
}
}

export default App;
