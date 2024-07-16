import React from "react";
import './Header.css';

//const Header = ({nome}) => {
const Header = (props) => {  
    const {nome} = props;
    const {sobrenome} = props;

    return (
        <div className="header">
            <span>Um momento {nome} {sobrenome}</span>
        </div>
    )
}
export default Header;