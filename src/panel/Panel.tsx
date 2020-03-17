import React from 'react';

import "../panel/Panel.css";
import "bootstrap/dist/css/bootstrap.css"
import IArtists from '../artists/IArtists';
import Album from '../album/Album';
import IAlbuns from '../album/IAlbuns';
import Button from '../button/Button';

const Panel = (artist: IArtists, setRet: (artista: IArtists) => void)  => {

    function callAlbum(album: IAlbuns){
        // let albumDiv = document.getElementById("#album");
        // albumDiv.append("<li>{album.name}</li>");
    };
 
    return (
        <div>
            <div className="background-deafult card">
                <div className="card-body">
                    <h5 className="card-title">{artist.name}</h5>
                    <img src="/assets/img/bootstrap.svg" alt="" width="32" height="32" title="Bootstrap"></img>
                    <div className="card-text">
                        <p>Idade: {artist.age}</p> 
                        <p>Albuns:</p>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                {artist.albums.map((answer, i) => {
                                    return (
                                    <Button {...answer} key={i} />
                                    )
                                })}
                            </ul>
                        </nav>
                        <div id="album">
                        </div>
                    </div>
                </div>
                {/* <input type="text" onChange={(event) => setRet({...artist, name: event.target.value})}/> */}
            </div>
        </div>
    );
}

export default Panel;