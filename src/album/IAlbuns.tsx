import IArtists from "../artists/IArtists";
import ISongs from "./songs/ISongs";

export default interface IAlbuns {
    name: String;
    artis?: IArtists;
    release: String;
    songs: ISongs[];
    visible: Boolean;
}