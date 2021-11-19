import React, {Component} from "react";
import axios from "axios";
// import SearchBar from './SearchBar/searchBar';
import MusicTable from './MusicTable/musicTable';
import Footer from './Footer/footer';
import NavBar from "./NavBar/navBar";

class App extends Component { 
    constructor(props) {
        super(props);
       
        this.state = {
           
            music:[]
        };
    }

    async componentDidMount(){
        let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music/')
        console.log(response.data)
        this.setState({
            music: response.data
        })
    }
    
    render() {
        return (
            <div className="container-fluid"> 
                <NavBar />
                {/* <SearchBar/> */}
                <MusicTable  music={this.state.music}/>
                <Footer /> 
                <img src="/<img src="/public/assets/pics/photo-1485579149621-3123dd979885.jpeg" /> " />

                
            </div>
        );
    }
}


export default App;