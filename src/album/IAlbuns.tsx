import IArtists from "../artists/IArtists";
import ISongs from "./songs/ISongs";

export default interface IAlbuns {
    name?: String;
    artist?: IArtists;
    release?: Date;
    songs?: ISongs[];
}