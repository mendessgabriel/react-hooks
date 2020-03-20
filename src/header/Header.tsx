import React from 'react';

import "../header/Header.css";
import "bootstrap/dist/css/bootstrap.css"

import { MdPersonOutline, MdSearch } from "react-icons/md";
import { IconContext } from "react-icons";

const Header = () => {
    return (
        <div className="bg-warning header-align card navbar paligned row">
            <div className="container">
                <div className="col-sm-1">
                    <IconContext.Provider value={{ color: "btn-dark", size: "2em", className: "global-class-name" }}>
                        <div>
                            <MdPersonOutline className="iconstyle" />
                        </div> 
                    </IconContext.Provider>
                </div>
                <div className="col-sm-8">
                    <nav className="bg-warning  col-sm navbar">
                        <form className="paligned form-inline"> 
                            <input className="bg-dark colorWhite navstyle form-control mr-sm-2" type="search" placeholder="Procure um artista ou uma musica..." aria-label="Search" />
                            <button className="btn btn-dark my-2 my-sm-0" type="submit">
                                <IconContext.Provider value={{ color: "btn-dark", size: "1.2em", className: "global-class-name" }}>
                                    <div>
                                        Procurar    <MdSearch />
                                    </div>
                                </IconContext.Provider>
                            </button> 
                        </form>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;