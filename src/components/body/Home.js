import React, { Component } from "react";
import { connect } from "react-redux";

// const mapStateToProps = state => {
//     console.log("map state to props", state);
//     return {

//     }
// }


// let connector = connect(mapStateToProps);

let connector = connect(state => {
    return {
        allDishes: state.dishes,
        sample: state.sample
    }
});

class Home extends Component {
    componentDidMount() {
        console.log("Home Props: ", this.props);
        this.props.dispatch({
            type: 'TEST',
            str: 'Restuarent'
        });
    }

    componentDidUpdate() {
        console.log('Home Props: ', this.props);
    }

    render() {
        document.title = 'Restuarent';
        return (
            <div>

            </div>
        )
    }
}
export default connector(Home);