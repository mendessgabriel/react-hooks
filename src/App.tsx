import React, { useState } from 'react';

import './App.css';

import IArtists from "./artists/IArtists";
import IAlbuns from "./album/IAlbuns";
import IGenre from "./genre/IGenre";

import Panel from "./panel/Panel";
import ISongs from './album/songs/ISongs';
import Header from './header/Header';

function App() {

  const genreRETobj: IGenre[] = [{genre: "RAP"}];
  const genreFBCobj: IGenre[] = [{genre: "RAP"}];

  // const songsRET: ISongs[] = [{name: "Invicto",duration: "",song: "saaa",album: albunsRET }];
  const AlbunsRET: IAlbuns[] = [{ name: "Numa Margem Distante", visible:true }, { name: "VIVAZ", visible: true }, { name: "REVEL", visible: true }, { name: "AUDAZ", visible: true }];
  
  const filipeRet: IArtists = {
    name: "Filipe Ret",
    age: 30,
    albums: AlbunsRET,
    genre: genreRETobj
  }

  const [genreRET, setGenreRET] = useState<IGenre[]>(genreRETobj);
  const [genreFBC, setGenreFBC] = useState<IGenre[]>(genreFBCobj);

  const [albunsRET, setAlbunsRET] = useState<IAlbuns[]>(AlbunsRET);
  const [ret, setRET] = useState<IArtists>(filipeRet);

  const [albunsFBC, setAlbunsFBC] = useState<IAlbuns[]>([{ name: "S.C.A", visible: true }, { name: "PADRIM", visible: true }]);
  const [fbc, setFBC] = useState<IArtists>({ name: "FBC", age: 28, albums: albunsFBC, genre: genreFBC });

  return (
    <div>
      {Header()}
      <div className="container">
        <div className="row">
          <div className="col-sm">
            {Panel(ret, setRET)}
          </div>
          <div className="col-sm">
            {Panel(fbc, setFBC)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;