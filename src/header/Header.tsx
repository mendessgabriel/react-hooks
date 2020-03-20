import React from 'react';

import "../header/Header.css";
import "bootstrap/dist/css/bootstrap.css"
import IArtists from '../artists/IArtists';
import Album from '../album/Album';
import IAlbuns from '../album/IAlbuns';
import Button from '../button/Button';

const Header = () => {
    return (
        <div className="header-align card navbar navbar-light bg-light paligned">
            <nav className="navbar navbar-light bg-light">
                <form className="paligned form-inline">
                    <input className="navstyle form-control mr-sm-2" type="search" placeholder="Procure um artista ou uma musica..." aria-label="Search" />
                    <button className="btn btn-dark my-2 my-sm-0" type="submit">Procurar</button>
                </form>
            </nav>
        </div>
    );
}

export default Header;