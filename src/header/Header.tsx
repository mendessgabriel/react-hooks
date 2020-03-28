import React, { useState, useEffect } from 'react';

import "bootstrap/dist/css/bootstrap.css"
import "../header/Header.css";


import { MdPersonOutline, MdSearch } from "react-icons/md";
import { IconContext } from "react-icons";
import IAppGeneral from '../IAppGeneral';
import Menu from '../menu/Menu';

const Header = (menuVisibility: IAppGeneral, setAppGeneral: (appGeneral: IAppGeneral) => void, searchArtistSong: (paramentro: String) => void) => {

    const [inputValue, setInputValue] = useState<String>("");
    const [isOpen, setOpen] = useState<Boolean>(false);


    const menuClass: string = `dropdown-menu${isOpen ? " show" : ""}`;

    const clickAdmin = () => {
        if (menuVisibility.isMenuVisible) {
            setAppGeneral({ ...menuVisibility, isMenuVisible: false })
        } else {
            setAppGeneral({ ...menuVisibility, isMenuVisible: true })
        }
    }

    const updateInputValue = (updateWord: String) => {
        setInputValue(updateWord);
    }

    const toggleOpen = () => {
        setOpen(!isOpen);
    }

    return (
        <>
            <div className="grid-item">
                {/* <IconContext.Provider value={{ color: "btn-dark", size: "2em", className: "global-class-name" }}>
                        <div>
                            <MdPersonOutline onClick={() => {clickAdmin()}} className="iconstyle" />
                        </div>
                    </IconContext.Provider> */}
                <div className="dropdown" >
                    <IconContext.Provider value={{ color: "btn-dark", size: "2em", className: "global-class-name" }}>
                        <div className="row">
                            <MdPersonOutline className="iconstyle" onClick={toggleOpen} />
                        </div>
                        <div className="row">
                            {isOpen && (Menu(isOpen, setOpen))}
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
            <div className="grid-item MyApp">My Music App</div>
            <div className="grid-item">
                <nav className="bg-warning">
                    <form className="paligned form-inline">
                        <input className="bg-dark colorWhite navstyle form-control mr-sm-2 inputCustom" onChange={(event) => updateInputValue(event.target.value)} type="search" placeholder="Procure um artista ou uma musica..." aria-label="Search" />
                        <a className="btn btn-dark my-2 my-sm-0">
                            <IconContext.Provider value={{ color: "#ffc107", size: "1.2em", className: "global-class-name " }}>
                                <div>
                                    <MdSearch type="button" onClick={() => searchArtistSong(inputValue)} />
                                </div>
                            </IconContext.Provider>
                        </a>
                    </form>
                </nav>
            </div>
        </>
    );
}

export default Header;