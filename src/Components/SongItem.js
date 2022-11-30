import './SongItem.css';
const SongItem = ({song, index})=>{
    return(
        
         <li className='song-item'>Chart Position: {index +1} <br></br> Title: {song["im:name"]["label"]} <br></br> 
         Artist: {song["im:artist"]["label"]}</li>

    );

    


}

export default SongItem

