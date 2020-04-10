import React, { useState } from 'react';

import "../menu/Menu.css";
import {menuOptions} from "../enum/enumerable";

const Menu = (isOpen: Boolean, setAppGeneral: (result: Boolean) => void, onOpenModal: (optionSelected: number) => void) => {
    return (
        <>
            <ul className="bg-dark ulCustom" onMouseLeave={() => setAppGeneral(false)}>
                <div aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item fontCustom" onClick={() => onOpenModal(menuOptions.perfil)}><b>Perfil</b></a>
                    <a className="dropdown-item fontCustom" onClick={() => onOpenModal(menuOptions.Configurations)}><b>Configurações</b></a>
                </div>
            </ul>
        </>
    );
}

export default Menu; 