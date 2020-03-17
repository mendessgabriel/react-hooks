import IGenre  from "../genre/IGenre";
import IAlbuns from "../album/IAlbuns";

export default interface IArtists {
    name: String;
    age: Number;
    genre: IGenre[];
    albums: IAlbuns[];
}