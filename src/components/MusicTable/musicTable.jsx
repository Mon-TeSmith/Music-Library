import React from 'react'
import "./musicTable.css";


const MusicLibrary = (props) => {

   const renderTableData=()=> {
    return props.music.map((song, index) => {

       return (
          <tr key={song.id}>
             <td>{song.id}</td>
             <td>{song.title}</td>
             <td>{song.artist}</td>
             <td>{song.genre}</td>
             <td>{song.releaseDate}</td>
          </tr>
       )
    })
 }

    return (
       <div>
          <h1 id='title' >Music Library</h1>
          <table id='tables'>
             <thead>
                <tr>
                   <th>ID</th>
                   <th>Song Name</th>
                   <th>Artist</th>
                   <th>Genre</th>
                   <th>Release Date</th>
                </tr>
            </thead>
             <tbody>
                {renderTableData()}
             </tbody>
          </table>
       </div>
    )
 

 
    }

export default MusicLibrary; 
