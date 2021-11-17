import React, { Component } from 'react';
import reactDom from 'react-dom';
import Axios from 'axios';
import “bootstrap/dist/css/bootstrap.css”;

import Footer from './Components/Footer/Footer';
import MusicTable from './Components/MusicTable/MusicTable';
import Navigation from './Components/Navigation/Navigation';
import SearchBar from './Components/SearchBar/SearchBar';

class App extends Component {
    constructor() {
      super();
  
      this.state = {
        calls: [],
        showMessage: false,
        is_archived: false
      };
    }
  
    componentDidMount() {
      fetch('https://aircall-job.herokuapp.com/activities')
        .then(response => response.json())
        .then(activities => this.setState({ calls: activities }))
        document.getElementById("reset").disabled = true;
    }
  
    handleArchive = event => {
     this.setState({calls: []});
     this.setState({ showMessage: true });
     document.getElementById("archive").disabled = true;
     document.getElementById("reset").disabled = false;
    };
  
    handleReset = event => {
      this.componentDidMount();
      this.setState({ showMessage: false });
      document.getElementById("reset").disabled = true;
      document.getElementById("archive").disabled = false;
     };
  
    render() {
      const { calls, showMessage } = this.state;
      console.log(calls);
      
    return (
      <div className='App'>
        <Header/>
        
        <ActivityFeed calls={calls} />
        <button type="button" className="archive-btn" id="archive"
        onClick={this.handleArchive}>Archive All Calls</button>
        {showMessage && <p>All calls have been archived</p>}
  
        <button type="button" className="reset-btn" id="reset"
        onClick={this.handleReset}>Reset Archived Calls</button>
      </div>
    );
  };
  }
 
  export default App;