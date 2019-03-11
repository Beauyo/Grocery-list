import React, { Component } from 'react';
import List from './List';
import GrocerysForm from './GrocerysForm';

class App extends Component {
  state = {
    grocerys: [
      { id: 1, name: "banannas", complete: false, },
      { id: 2, name: "bread", complete: false, },
      { id: 3, name: "beer", complete: false, }
    ]
  };

  handleClick = (id) => {
    const { grocerys } = this.state;
    this.setState({
      grocerys: this.state.grocerys.map( grocery => {
        if (grocery.id === id) {
          return {
            ...grocery,
            complete: !grocery.complete,
          }
        }
        return grocery;
      })
    })
  }

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }

  addItem = (name) => {
    const { grocerys } = this.state;
    const grocery = { name, id: this.getId() , complete: false }
    this.setState({ grocerys: [grocery, ...grocerys] });
  }

  renderGrocerys = () => {
    const { grocerys, } = this.state;
    return grocerys.map( grocery => 
       <li key={grocery.id}>{grocery.name}</li>
      )
  }

  render() {
    const { grocerys } = this.state
    return (
      <div className="App">
      <ul>
       <GrocerysForm addItem={this.addItem} />
       <List name="Grocery List" items={this.state.grocerys} groceryClick={this.handleClick} />
      </ul>
      </div>
    );
  }
}

export default App;
