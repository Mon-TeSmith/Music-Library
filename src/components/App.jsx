import React, {Component} from "react";
import "./App.css" 
import axios from "axios";
import SearchBar from './SearchBar/searchBar';
import MusicTable from './MusicTable/musicTable';
import Navbar from './NavBar/navBar';
import Footer from './Footer/footer';
import NavBar from "./NavBar/navBar";

class App extends Component { 
    constructor(props) {
        super(props);
        this.books = [
            {title: "Ready Player One", author: "Ernest Cline"},
            {title: 'All the Light We Cannot See', author: 'Anthony Doerr'},
            {title: 'The First and Last Freedom', author: 'Jiddu Krishamurit'},
        ];
        this.state = {
            bookNumber:0,
            music:[]
        };
    }

    goToNextBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;
        if (tempBookNumber === this.books.length) {
            tempBookNumber = 0;
        }

        this.setState({
            bookNumber: tempBookNumber 
        });
    }
    async componentDidMount(){
        let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music/')
        console.log(response.data)
        this.setState({
            music: response.data
        })
    }
    
    goToPreviousBook = () => {
         let tempBookNumber = this.state.bookNumber;
         tempBookNumber--;
         if(tempBookNumber < 0) {
             tempBookNumber = this.books.length -1;     
         }  

         this.setState({
             bookNumber: tempBookNumber
         });
    }
    
    createBook = (newBook) => {
        console.log('From the createBook on App component', newBook);
        this.book.push(newBook);
        this.setState ({
            bookNumber: this.books.length - 1
        })

    }


    render() {
        return (
            <div className="container-fluid"> 
                <NavBar />
                {/* <SearchBar/> */}
                <MusicTable  music={this.state.music}/>
                <Footer /> 
            </div>
        ) 
    }
}

export default App;