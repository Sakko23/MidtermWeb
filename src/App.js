import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import mid2 from './mid2'
class App extends Component {
  constructor(props){
    super(props);  
    this.state = {
      clicked: false,
      color1: 'white',
      color2: 'white',
      color3: 'white'
    }
    this.changeColor = this.changeColor.bind(this);

  }

  changeColor(e){
    if (e=='color1'){
      if (this.state.clicked)
      this.setState({ 
        color1 : 'white',
        clicked: false
      });
      else{
        this.setState({
          color1: 'blue',
          clicked: true
        });
      }
    }
    if (e=='color2'){
      if (this.state.clicked)
      this.setState({ 
        color2 : 'white',
        clicked: false
      });
      else{
        this.setState({
          color2: 'blue',
          clicked: true
        });
      }
    }
    if (e=='color3'){
      if (this.state.clicked)
      this.setState({ 
        color3 : 'white',
        clicked: false
      });
      else{
        this.setState({
          color3: 'blue',
          clicked: true
        });
      }
    }
  }

  render() {
    return (
      <div>
        <div className="compsboard">
          <div onClick={()=>this.changeColor('color1')} style={{background:this.state.color1}} className="comps"> 
            <p>About</p>
          </div>
            <div onClick={()=>this.changeColor('color2')} style={{background:this.state.color2}} className="comps"> 
              <p>Home</p>
            </div>
            <div onClick={()=>this.changeColor('color3')} style={{background:this.state.color3}} className="comps"> 
              <p>Contact</p>
            </div>
        </div>
        <div>
          <h1>#2</h1>
          <mid2 />
        </div>
      </div>
    );
  }
}

export default App;

