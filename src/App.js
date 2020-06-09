import React, { Component } from 'react';
import Showitems from './components/ShowItems';
import Additems from './components/AddItems';
import './App.css';

class App extends Component {
  originalState = {
    items: [
      { id: 1, activity: "breakfast", time: "7" },
      { id: 2, activity: "pray", time: "7:30" },
      { id: 3, activity: "work", time: "7:45" }]
  }

  //add item 
  addItem = (item) => {

    item.id = Math.random();
    let newItems = this.originalState.items;

    if (item.activity !== "" && item.time !== "") {
      newItems.push(item);//push todo item in the new listitems
    } else {
      alert("Please Fill Your Data..");
    }

    this.setState({
      items: newItems
    });

  }

  //delete item
  deleteItem = (itemId) => {
    if (window.confirm("Are You Sure?! Press ok to delete or cancel to abort")) {
      let newItems2 = this.originalState.items;
      let itemIndex = newItems2.findIndex(item => item.id === itemId);

      newItems2.splice(itemIndex, 1);
      this.setState({
        items: newItems2
      });
    }//end if
  }
  render() {
    return (
      <div className="App">
        <h2>Your Today's Activity</h2>
        <Showitems items_to_show={this.originalState.items} deleteItem={this.deleteItem} />
        <Additems addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
