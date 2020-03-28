import React, { useState } from 'react';

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
        <div className="bg-warning header-align card navbar paligned row">
            <div className="container">
                <div className="col-sm-1">
                    {/* <IconContext.Provider value={{ color: "btn-dark", size: "2em", className: "global-class-name" }}>
                        <div>
                            <MdPersonOutline onClick={() => {clickAdmin()}} className="iconstyle" />
                        </div>
                    </IconContext.Provider> */}
                    <div className="dropdown" onClick={toggleOpen}>
                        {/* <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true">Dropdown</button> */}
                        <IconContext.Provider value={{ color: "btn-dark", size: "2em", className: "global-class-name" }}>
                            <div>
                                <MdPersonOutline className="iconstyle" />
                            </div>
                        </IconContext.Provider>
                        {isOpen && (Menu())}
                    </div>
                </div>
                <div className="col-sm-8">
                    <nav className="bg-warning  col-sm navbar">
                        <form className="paligned form-inline">
                            <input className="bg-dark colorWhite navstyle form-control mr-sm-2" onChange={(event) => updateInputValue(event.target.value)} type="search" placeholder="Procure um artista ou uma musica..." aria-label="Search" />
                            <a className="btn btn-dark my-2 my-sm-0">
                                <IconContext.Provider value={{ color: "#ffc107", size: "1.2em", className: "global-class-name" }}>
                                    <div>
                                        <MdSearch type="button" onClick={() => searchArtistSong(inputValue)} />
                                    </div>
                                </IconContext.Provider>
                            </a>
                        </form>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;