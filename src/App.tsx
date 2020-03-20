import React, { useState } from 'react';

import './App.css';

import IArtists from "./artists/IArtists";
import IAlbuns from "./album/IAlbuns";
import IGenre from "./genre/IGenre";

import Panel from "./panel/Panel";
import ISongs from './album/songs/ISongs';
import Header from './header/Header';
import Menu from './menu/Menu';
import IAppGeneral from './IAppGeneral';

function App() {

  const genreRETobj: IGenre[] = [{ genre: "RAP" }];
  const genreFBCobj: IGenre[] = [{ genre: "RAP" }];

  const songsTreVVZ: ISongs[] = [{ song: "Neurotico de guerra", duration: "3:37", name: "Neurotico de guerra" }, { song: "Réus", duration: "3:37", name: "Réus" }];
  const [songsRetVVZ] = useState<ISongs[]>(songsTreVVZ);

  const songsTreNMD: ISongs[] = [{ song: "Só precisamos de nós", duration: "2:37", name: "Só precisamos de nós" }, { song: "Desenho", duration: "3:28", name: "Desenho" }, { song: "Questione", duration: "2:32", name: "Questione" }];
  const [songsRetNMD] = useState<ISongs[]>(songsTreNMD);

  // const songsRET: ISongs[] = [{name: "Invicto",duration: "",song: "saaa",album: albunsRET }];
  const AlbunsRET: IAlbuns[] = [{ name: "Numa Margem Distante", visible: true, songs: songsRetNMD }, { name: "VIVAZ", visible: true, songs: songsRetVVZ }, { name: "REVEL", visible: true, songs: songsRetNMD }, { name: "AUDAZ", visible: true, songs: songsRetNMD }];

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

  const [albunsFBC, setAlbunsFBC] = useState<IAlbuns[]>([{ name: "S.C.A", visible: true, songs: songsRetNMD }, { name: "PADRIM", visible: true, songs: songsRetNMD }]);
  const [fbc, setFBC] = useState<IArtists>({ name: "FBC", age: 28, albums: albunsFBC, genre: genreFBC });

  const appStart: IAppGeneral = { isMenuVisible: true };
  const [appGeneral, setAppGeneral] = useState<IAppGeneral>(appStart);

  const renderMenu = () => { if (!appGeneral.isMenuVisible) { return (<div>{Menu()}</div>) } else { return (<div></div>) } }

  return (
    <div className="appFont">
      {Header(appGeneral, setAppGeneral)}
      <div className="row">
        <div className="col-sm-1">
          {renderMenu()}
        </div>
        <div className="col-sm">
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
      </div>


    </div>
  );
}

export default App;