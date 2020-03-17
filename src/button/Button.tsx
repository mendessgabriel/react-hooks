import React from 'react';

// import "../panel/Album.css";
import "bootstrap/dist/css/bootstrap.css"
import IAlbuns from '../album/IAlbuns';

const Button = (albuns: IAlbuns) => {
    if (albuns.visible) {
        return (
            <div>
                <button className="btn btn-dark">{albuns.name}</button>
            </div>
        );
    } else {
        return (
            <div>
                <button className="btn btn-dark">Button</button>
            </div>
            )
    }
}

export default Button;