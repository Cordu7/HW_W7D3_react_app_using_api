import SongItem from "./SongItem"

const SongList = ({songs}) => {

    

    const SongItems = songs.map((song, index) => {
        return (
        <SongItem key={index} song={song} index={index}/>
        );
    });

    
    
    
    return (
        <div>
        <ul className="song-list">
          {SongItems}
        </ul>
      </div>
      )

};

export default SongList