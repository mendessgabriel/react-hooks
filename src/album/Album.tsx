import React from 'react';

// import "../panel/Album.css";
import "bootstrap/dist/css/bootstrap.css"
import IAlbuns from '../album/IAlbuns';

const Album = (album: IAlbuns) => {
    return (
        <div>
            {
                <li>
                    <a onClick={() => console.log(album.name)}>{album.name}</a>
                </li>
            }
        </div>
    );
}

export default Album;