import React from 'react';

// import "../panel/Album.css";
import "bootstrap/dist/css/bootstrap.css"
import IAlbuns from '../album/IAlbuns';
import "../button/Button.css";

const Button = (albuns: IAlbuns) => {
    if (albuns.visible) {
        return (
            <div>
                <button className="btn btn-warning borderColor">{albuns.name}</button>
            </div>
        );
    } else {
        return (
            <div>
                <button className="btn btn-warning borderColor">Button</button>
            </div>
            )
    }
}

export default Button;