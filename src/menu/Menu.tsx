import React from 'react';

import "../menu/Menu.css";
import "bootstrap/dist/css/bootstrap.css"

const Menu = () => {
    return (
        <ul className="bg-dark ulCustom">
            <div aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item fontCustom" href="#">Perfil</a>
                <a className="dropdown-item fontCustom" href="#">Configurações</a>
            </div>  
        </ul> 
    );
} 

export default Menu; 