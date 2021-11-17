import React, { Component } from 'react'
import "./musicTable.css";

// Table Header
const MusicLibrary = (props) => {
//    let renderedMusicLibrary= props.musiclibrary.map((musiclibrary) => {
//     let header = Object.keys(this.state.MusicLibrary[0])
//     return header.map((renderedMusicLibrary, 0) => {
//        return <th key={index}>{key.toUpperCase()}</th>
//     });
//  })

//  render() {
//     return (
//        <div>
//           <h1 id='title'>React Dynamic Table</h1>
//           <table id='students'>
//              <tbody>
//                 <tr>{this.renderTableHeader()}</tr>
//                 {this.renderTableData()}
//              </tbody>
//           </table>
//        </div>
//     )
//  }

   const renderTableData=()=> {
    return props.music.map((song, index) => {

       return (
          <tr key={song.id}>
             <td>{song.id}</td>
             <td>{song.title}</td>
             <td>{song.artist}</td>
             <td>{song.genre}</td>
          </tr>
       )
    })
 }


    return (
       <div>
          <h1 id='title'>React Dynamic Table</h1>
          <table id='students'>
             <thead>
                <tr>
                   <th>ID</th>
                   <th>Song Name</th>
                   <th>Artist</th>
                </tr>
            </thead>
             <tbody>
                {renderTableData()}
             </tbody>
          </table>
       </div>
    )
 

 
    }
// class Table extends Component {
//    constructor(props) {
//       super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
//       this.state = { //state is by default an object
//          students: [
//             { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
//             { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
//             { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
//             { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
//          ]
//       }
//    }

//    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
//       return (
//          <div>
//             <h1>React Dynamic Table</h1>
//          </div>
//       )
//    }
// }

export default MusicLibrary; 
