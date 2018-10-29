import React, { Component } from 'react';
import './App.css';
import CardList from "./components/CardList/CardList";
import SearchField from "./components/SearchField/SearchField";

class App extends Component {
  constructor(){
    super()
    this.state = {
      searchParam: "",
      robots: []
    }
  }

  handleSearch = (event) => {
    this.setState({...this.state, searchParam: event.target.value});
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({...this.state, robots: users}));
  }


  render() {
     const newRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchParam.toLowerCase());
    });
    return (

      <div className="App">
        <div>
          <h1 className="robo-friends-rext"> Robofriends </h1>
        </div>
        <div>
          <SearchField searchChange={this.handleSearch} />
        </div>
         <CardList robots={newRobots} />
      </div>
    );
  }
}

export default App;
