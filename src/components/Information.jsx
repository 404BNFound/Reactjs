import './assets/css/Destination.css';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import bg from './assets/images/mars.jpg';
import ReactPlayer from 'react-player'
import Base64Downloader from 'react-base64-downloader';
import ReactAudioPlayer from 'react-audio-player';

// ...

    function Information() {
               

      return (
     
          <div >
           
          
        
<ReactAudioPlayer
  src="./audio1.mp3"
  autoPlay
  controls
/> 


        </div>
      );
    }
    
  export default Information;



