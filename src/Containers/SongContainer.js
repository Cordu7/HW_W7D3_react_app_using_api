import React, { useState, useEffect } from 'react';
import SongList from '../Components/SongList';
import './SongContainer.css';


const SongContainer = ()=>{

    const [songs, setSongs]= useState([]);
   

    const getSongs= function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(result=>result.json())
        // console.log(result.json())
        .then(songs => setSongs(songs.feed.entry));
    };


    useEffect(()=>{
        getSongs();
    }, []);
  
    return (
        <div className="main-container">
            <h2 className="heading">Top 20 Uk Songs</h2>
            <SongList songs={songs} />
            
            
        </div>
    )

}

export default SongContainer