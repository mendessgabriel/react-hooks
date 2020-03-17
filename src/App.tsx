import React, { useState } from 'react';

import './App.css';

import IArtists from "./artists/IArtists";
import IAlbuns from "./album/IAlbuns";
import IGenre from "./genre/IGenre";

import Panel from "./panel/Panel";

function App() {

  const genreRETobj: IGenre[] = [{genre: "RAP"}];
  const genreFBCobj: IGenre[] = [{genre: "RAP"}];
  const AlbunsRET: IAlbuns[] = [{ name: "Numa Margem Distante" }, { name: "VIVAZ" }, { name: "REVEL" }, { name: "AUDAZ" }];
  
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

  const [albunsFBC, setAlbunsFBC] = useState<IAlbuns[]>([{ name: "S.C.A" }, { name: "PADRIM" }]);
  const [fbc, setFBC] = useState<IArtists>({ name: "FBC", age: 28, albums: albunsFBC, genre: genreFBC });

  return (
    <div>
      {Date.now}
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