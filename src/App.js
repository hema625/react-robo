import React, { Component } from 'react';
import Cardlist from './components/cardlist';
// import {robots} from './components/robots';
import Search from './components/Search';
import './App.css';
import Scroll from './components/Scroll';

class App extends Component {

  state = {
    robo: [],
    searchField : ''
  }

  search = (e)=>{
    // console.log(1,e.target.value);
    this.setState({
      searchField : e.target.value
    })
  }

  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=> res.json())
      .then(json=>this.setState({robo : json}))
  }
  render() {
    const r = this.state.robo.filter(num=> {
      return num.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    if (!this.state.robo.length ) {
        return(<h1>Loading...</h1>)
    }
    else {
    return (
      <div className="tc">
      <h1>Robots</h1>
      <Search fn= {this.search}/>
      <Scroll>
          <Cardlist robots1 = {r} />
          </Scroll>
      </div>
    );
    }
  }
}

export default App;

/*
import React, { Component } from 'react';
import Cardlist from './components/cardlist';
import {robots} from './components/robots';
import Search from './components/Search';
import './App.css';

class App extends Component {

  state = {
    robo: robots,
    searchField : ''
  }

  search = (e)=>{
    // console.log(1,e.target.value);
    this.setState({
      searchField : e.target.value
    })
  }
  render() {
    const r = this.state.robo.filter(num=> {
      return num.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc">
      <h1>Robots</h1>
      <Search fn= {this.search}/>
          <Cardlist robots1 = {r} />
      </div>
    );
  }
}

export default App; */

