import React, { Component } from "react";
import { connect } from "react-redux";

// const mapStateToProps = state => {
//     console.log("map state to props", state);
//     return {

//     }
// }


// let connector = connect(mapStateToProps);

let connector = connect(state => {
    console.log("map state to props", state);
    return {
        allDishes: state.dishes,
        sample: state.sample
    }
});

class Home extends Component {
    componentDidMount() {
        // console.log("Home State: ", this.state);
        console.log("Home Props: ", this.props);
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