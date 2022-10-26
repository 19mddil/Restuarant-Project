import React, { Component } from "react";

class Home extends Component {
    componentDidMount() {
        console.log("Home State: ", this.state);
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

export default Home;