import React from "react";


const MenuItem = props => {
    console.log(props);
    return (
        <div>
            {props.dish.name}
        </div>
    );
}

export default MenuItem;