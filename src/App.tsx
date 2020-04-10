import React, { useState } from 'react';

import './App.css';

import IGenre from "./genre/IGenre";
import IAlbuns from "./album/IAlbuns";
import IArtists from "./artists/IArtists";

import Menu from './menu/Menu';
import Panel from "./panel/Panel";
import Header from './header/Header';
import IAppGeneral from './IAppGeneral';
import ISongs from './album/songs/ISongs';

import "bootstrap/dist/css/bootstrap.css"
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function App() {
  const [instantGenre, setInstanceGenre] = useState<IGenre[]>([]);
  const [instantSongs, setInstantSongs] = useState<ISongs[]>([]);
  const [instantAlbuns, setInstantAlbuns] = useState<IAlbuns[]>([])
  const [instantArtist, setInstantArtist] = useState<IArtists>({ age: 0, name: "", albums: instantAlbuns, genre: instantGenre });
  const genreRETobj: IGenre[] = [{ genre: "RAP" }];
  const genreFBCobj: IGenre[] = [{ genre: "RAP" }];

  const [openModal, setOpenModal] = useState<boolean>(false);

  const songsTreVVZ: ISongs[] = [{ song: "Neurotico de guerra", duration: "3:37", name: "Neurotico de guerra" }, { song: "Réus", duration: "3:37", name: "Réus" }];
  const [songsRetVVZ] = useState<ISongs[]>(songsTreVVZ);

  const songsTreNMD: ISongs[] = [{ song: "Só precisamos de nós", duration: "2:37", name: "Só precisamos de nós" }, { song: "Desenho", duration: "3:28", name: "Desenho" }, { song: "Questione", duration: "2:32", name: "Questione" }];
  const [songsRetNMD] = useState<ISongs[]>(songsTreNMD);

  const AlbunsRET: IAlbuns[] = [{ name: "Numa Margem Distante", visible: true, songs: songsRetNMD, release: "15/11" }, { name: "VIVAZ", visible: true, songs: songsRetVVZ, release: "15/11" }, { name: "REVEL", visible: true, songs: songsRetNMD, release: "15/11" }, { name: "AUDAZ", visible: true, songs: songsRetNMD, release: "15/11" }];

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

  const [albunsFBC, setAlbunsFBC] = useState<IAlbuns[]>([{ name: "S.C.A", visible: true, songs: songsRetNMD, release: "15/11" }, { name: "PADRIM", visible: true, songs: songsRetNMD, release: "15/11" }]);
  const [fbc, setFBC] = useState<IArtists>({ name: "FBC", age: 28, albums: albunsFBC, genre: genreFBC });

  const [currentArtists, setCurrentArtists] = useState<IArtists[]>([ret, fbc]);
  const [artistsToBeDisplayed, setArtistsToBeDisplayed] = useState<IArtists[]>([instantArtist]);

  const appStart: IAppGeneral = { isMenuVisible: true };
  const [appGeneral, setAppGeneral] = useState<IAppGeneral>(appStart);

  const renderMenu = () => { if (!appGeneral.isMenuVisible) { return (<div>{Menu(false, () => { }, () => { })}</div>) } else { return (<div></div>) } }

  const [modalContent, setModalContent] = useState<number>(0);

  const br = {
    // overlay: {
    //   background: "#FFFF00"
    // },
    modal: {
      borderRadius: "10px"
    }
  };
  const searchArtistSong = (parametro: String) => {
    setCurrentArtists([])
    currentArtists.forEach(element => {
      if (element.name.includes(parametro.toString())) {
        setCurrentArtists([{ ...element }]); //Its not working
      }
    });
  }
  const onOpenModal = (optionSelected: number) => {
    setModalContent(optionSelected);
    setOpenModal(true);
  };
  const onCloseModal = () => {
    setOpenModal(false);
  };
  const openModalWithContent = (n: number) => {
    switch(n) {
      case 1:
        return(
          <div>
            <Modal open={openModal}  styles={br} onClose={() => onCloseModal()} center={true}>
              <h2>{n}</h2>
              Bem-vindo ao seu perfil
              {/* fazer um componente de perfil */}
            </Modal>
          </div>
        );
        break;
      case 2:
        return(
          <div>
            <Modal open={openModal}  styles={br} onClose={() => onCloseModal()} center={true}>
              <h2>{n}</h2>
              Bem-vindo as confiurações
              {/* fazer um componente de configurações */}
            </Modal>
          </div>
        );
        break;
      default:
        return(
          <div>
            <Modal open={openModal}  styles={br} onClose={() => onCloseModal()} center={true}>
              <h2>Ops, nada foi encontrado...</h2>
            </Modal>
          </div>
        );
    }
  }

  return (
    <div className="appFont">
      <div className="grid-container">
        {Header(appGeneral, setAppGeneral, searchArtistSong, onOpenModal)}
      </div>
      <div className="row">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Carousel
                infinite
                slidesPerPage={2}
                autoPlay={2500}
                stopAutoPlayOnHover
                arrowLeft={<MdKeyboardArrowLeft />}
                arrowRight={<MdKeyboardArrowRight />}
                addArrowClickHandler>
                {
                  currentArtists.length > 0 && (
                    currentArtists.map((element, i) => {
                      return (
                        <div className="col-sm" key={i}>
                          {Panel(element)}
                        </div>
                      )
                    })
                  )
                }
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={() => onOpenModal()}>Open modal</button> */}
        {/* <Modal open={openModal}  styles={br} onClose={() => onCloseModal()} center={true}>
          <h2>Simple centered modal</h2>
        </Modal> */}
        {openModal && (
          openModalWithContent(modalContent)
        )}
    </div>
  );
}

export default App;