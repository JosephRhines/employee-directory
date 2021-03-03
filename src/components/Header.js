import React from "react";


const styles = {
headerStyle: {
    padding: "60px",
    background: "blue",
    fontSize: "30px",
    color: "white",
    textAlign: "center"
},

};



function Header() {
    return (
        <div style={styles.headerStyle}>Employee-Directory</div>
    );
}

export default Header;

