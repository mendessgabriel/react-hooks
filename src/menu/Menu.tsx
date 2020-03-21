import React from 'react';

import "../menu/Menu.css";
import "bootstrap/dist/css/bootstrap.css"

const Menu = () => {
    return (
        <ul className="bg-warning ulCustom">
            <li className="liCustom"><a><b>Perfil</b></a></li>
            <li className="liCustom"><a><b>Configurações</b></a></li>
        </ul>
    );
}

export default Menu;