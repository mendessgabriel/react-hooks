import React from 'react';

import "../header/Header.css";
import "bootstrap/dist/css/bootstrap.css"

import { MdPersonOutline } from "react-icons/md";
import { IconContext } from "react-icons";

const Header = () => {
    return (

        <div className="header-align card navbar navbar-light bg-light paligned row">
            <div className="container">
                <div className="col-sm-1">
                    <IconContext.Provider value={{ color: "btn-dark", size: "2em", className: "global-class-name" }}>
                        <div>
                            <MdPersonOutline className="iconstyle" />
                        </div>
                    </IconContext.Provider>
                </div>
                <div className="col-sm-8">
                    <nav className="col-sm navbar navbar-light bg-light">
                        <form className="paligned form-inline">
                            <input className="navstyle form-control mr-sm-2" type="search" placeholder="Procure um artista ou uma musica..." aria-label="Search" />
                            <button className="btn btn-dark my-2 my-sm-0" type="submit">Procurar</button>
                        </form>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;