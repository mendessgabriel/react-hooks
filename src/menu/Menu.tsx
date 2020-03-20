import React from 'react';

import "../menu/Menu.css";
import "bootstrap/dist/css/bootstrap.css"

const Menu = () => {
    return (
        <ul className="bg-warning ulCustom">
            <li className="liCustom"><a>Perfil</a></li>
            <li className="liCustom"><a>Configurações</a></li>
        </ul>
    );
}

export default Menu;