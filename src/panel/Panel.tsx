import React, { useState } from 'react';

import "../panel/Panel.css";
import "bootstrap/dist/css/bootstrap.css"
import IArtists from '../artists/IArtists';
import Album from '../album/Album';
import IAlbuns from '../album/IAlbuns';
import Button from '../button/Button';
import ISongs from '../album/songs/ISongs';

import { MdClose } from "react-icons/md";
import { IconContext } from "react-icons";
import IAppGeneral from '../IAppGeneral';

import ret from "../mock/ret.jpg";

const Panel = (artist: IArtists, setName?: (artista: IArtists) => void) => {

    const retImg:string = "../mock/ret.jpg";
    const [visible, setVisible] = useState<Boolean>(false);
    const [currentSongs, setCurrentSongs] = useState<ISongs[]>([{ name: "", duration: "", song: "" }]);

    function callAlbumSongs(album: IAlbuns) {
        setVisible(true);
        setCurrentSongs(album.songs);
        return (
            <div>{album.name}</div>
        );
    };

    function closeAlbumSongs() { setVisible(false) }
    
    if (!visible) {
        return (
            <div>
                <div className="background-deafult card">
                    <div className="card-body">
                        <img src="https://i.pinimg.com/236x/ef/f8/62/eff862427282b7066d477bea2acba839.jpg" alt="..." className="img-thumbnail imgAdjust" />
                        <h5 className="card-title fontAdjust">{artist.name}</h5>
                        {/* <img src="/assets/img/bootstrap.svg" alt="" width="32" height="32" title="Bootstrap"></img> */}
                        <div className="card-text">
                            <p>Idade: {artist.age}</p>
                            <p>Albuns:</p>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    {artist.albums.map((answer, i) => {
                                        return (
                                            <a onClick={() => callAlbumSongs(answer)} key={i}><Button {...answer} key={i} /></a>
                                        )
                                    })}
                                </ul>
                            </nav>
                        </div>
                    </div>
                    {/* <input type="text" onChange={(event) => setName({ ...artist, name: event.target.value })} /> */}
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className="background-deafult card">
                    <div className="card-body">
                        <h5 className="card-title">{artist.name}</h5>
                        <div className="card-text">
                            <p>Idade: {artist.age}</p>
                            <p>Albuns:</p>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    {artist.albums.map((answer, i) => {
                                        return (
                                            <a onClick={() => callAlbumSongs(answer)} key={i}><Button {...answer} key={i} /></a>
                                        )
                                    })}
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <IconContext.Provider value={{ color: "btn-dark", size: "2em", className: "iconStyle global-class-name" }}>
                        <div className="iconStyle"> 
                            <MdClose onClick={() => closeAlbumSongs()}/>
                        </div>
                    </IconContext.Provider>
                    <div>
                        <ul>
                        {currentSongs.length > 0 && (
                            currentSongs.map((answer, i) => {
                                return (
                                    <li key={i} className={i % 2 == 0 ? "strippedIn" : "strippedOut"}>{answer.name}</li>
                                )
                            })
                        )}
                        </ul>
                    </div>
                    {/* <input type="text" onChange={(event) => setName({...artist, name: event.target.value})}/> */}
                </div>
            </div>
        );
    }
}

export default Panel;