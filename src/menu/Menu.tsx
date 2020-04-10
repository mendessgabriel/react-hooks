import React, { useState } from 'react';

import "../menu/Menu.css";

const Menu = (isOpen: Boolean, setAppGeneral: (result: Boolean) => void, onOpenModal: () => void) => {
    return (
        <>
            <ul className="bg-dark ulCustom" onMouseLeave={() => setAppGeneral(false)}>
                <div aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item fontCustom" onClick={() => onOpenModal()}>Perfil</a>
                    <a className="dropdown-item fontCustom" onClick={() => onOpenModal()}>Configurações</a>
                </div>
            </ul>
        </>
    );
}

export default Menu; 