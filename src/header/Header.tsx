import React, { useState } from 'react';

import "bootstrap/dist/css/bootstrap.css"
import "../header/Header.css";


import { MdPersonOutline, MdSearch } from "react-icons/md";
import { IconContext } from "react-icons";
import IAppGeneral from '../IAppGeneral';

const Header = (menuVisibility: IAppGeneral, setAppGeneral: (appGeneral: IAppGeneral) => void, searchArtistSong: (paramentro:String) => void) => {

    const [inputValue, setInputValue] = useState<String>(""); 

    const clickAdmin = () => {
        if(menuVisibility.isMenuVisible){
            setAppGeneral({...menuVisibility, isMenuVisible: false})
        }else{
            setAppGeneral({...menuVisibility, isMenuVisible: true})
        }
    }

    const updateInputValue = (updateWord: String) => {
        setInputValue(updateWord);
    }

    return (
        <div className="bg-warning header-align card navbar paligned row">
            <div className="container">
                <div className="col-sm-1">
                    <IconContext.Provider value={{ color: "btn-dark", size: "2em", className: "global-class-name" }}>
                        <div>
                            <MdPersonOutline onClick={() => {clickAdmin()}} className="iconstyle" />
                        </div>
                    </IconContext.Provider>
                </div>
                <div className="col-sm-8">
                    <nav className="bg-warning  col-sm navbar">
                        <form className="paligned form-inline">
                            <input className="bg-dark colorWhite navstyle form-control mr-sm-2" onChange={(event) => updateInputValue(event.target.value)} type="search" placeholder="Procure um artista ou uma musica..." aria-label="Search" />
                            <a className="btn btn-dark my-2 my-sm-0">
                                <IconContext.Provider value={{ color: "#ffc107", size: "1.2em" , className: "global-class-name" }}>
                                    <div>
                                        <MdSearch type="button" onClick={() => searchArtistSong(inputValue)}  />
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