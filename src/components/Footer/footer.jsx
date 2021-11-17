import React, from 'react';
import './Footer.css';

export default class Footer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentYear: new Date().getFullYear(),
      }
    }
   
}

// footer code from DCC Library Project
const Footer = () => {
    return (
        <footer className='footer'>
            <h4>Copyright © 2021</h4>
        </footer>
    );
}

export default footer;