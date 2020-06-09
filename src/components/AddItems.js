import React, { Component } from 'react';
import "./additems.css";
class AddItems extends Component {
    state = {
        activity: "",
        time: ""
    }

    //fill data in the state
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    //preventDefault
    preventDefault = (e) => {
        e.preventDefault();//prevent refreshing the page when press enter or submit

        this.props.addItem(this.state); //send the state to the "addItem" function as a parameter
       //reset the state after submitting the data into originalState
        this.setState({
            activity: "",
            time: ""
        });
    }

    render() {
        return (
            <div className = "controls">
                <form onSubmit={this.preventDefault}>
                    <input type="text" placeholder="Your Activity" onChange={this.handleChange} id="activity" value={this.state.activity} />
                    <input type="number" placeholder="Activity Time" onChange={this.handleChange} id="time" value = {this.state.time} />
                    <input type="submit" value="Add Todo" />
                </form>
            </div>
        );
    }
}

export default AddItems;