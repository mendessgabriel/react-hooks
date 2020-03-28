import React from 'react';

import "../menu/Menu.css";
import "bootstrap/dist/css/bootstrap.css"

const Menu = (isOpen: Boolean, setAppGeneral: (result: Boolean) => void) => {
    return (
        <ul className="bg-dark ulCustom" onMouseLeave={() => setAppGeneral(false)}>
            <div aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item fontCustom" data-toggle="modal">Perfil</a>
                <a className="dropdown-item fontCustom" data-toggle="modal">Configurações</a>
            </div>
        </ul>
    );
}

export default Menu; 