import React, { Component } from 'react';
import Wrapper from './components/wrapper/wrapper';

class App extends Component {

  constructor() {
    super();

    this.state = {
      defValue: "",
      defId: 0,
      toAdd: "",
      items: [
        {
          id: 0,
          name: "Example Item"
        }
      ]
    }
  }

  addItem = (e) => {
    const currentItems = this.state.items;
    const toAdd = {
      name: this.state.toAdd,
      id: this.state.defId++
    }

    if(this.state.toAdd === "") {

    }else{
      this.setState(prevState => ({
        items: [...currentItems, toAdd]
      }))
    }
  }

  removeItem = (id) => {
    console.log(id);
    const items = this.state.items;
    this.setState({
      items: items.filter(item =>
        item.id !== id)
    })
  }

  render() {
    return (
      <div className="App">
        <Wrapper
        onInputChange={(e) => this.setState({toAdd: e.target.value})}
        onAddClick={this.addItem}
        items={this.state.items}
        onRemoveButtonClick={(id) => this.removeItem(id)} />
      </div>
    );
  }
}

export default App;
