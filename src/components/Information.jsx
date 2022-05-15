import './assets/css/Information.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, TextField, CardActionArea, CardActions } from '@mui/material';
// ...

    function Information() {
      const [duree, setduree] = React.useState('');
      const [mess, setmess] = React.useState('');
      const [inp, setinp] = React.useState('');
      const [video, setvideo] = React.useState('');
      const handleChange = (e) => {
        setduree(e.target.value);
      };
      const onSubmit =(e) => {
        e.preventDefault();
        setmess(inp)
        console.log(inp)
      }
      

      return (
     
       
              <div className="c">
            <div className="leftbox">
              <h4 className='title'>INFORMATIONS</h4>

        <div><Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Dur</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={duree}
          label="duree"
          onChange={handleChange}
        >
          <MenuItem value={10}>10ans</MenuItem>
          <MenuItem value={50}>50ans</MenuItem>
          <MenuItem value={200}>200ans</MenuItem>
        </Select>
      </FormControl>
    </Box></div>


            <div> <p> Message</p>
<TextField id="standard-basic" label="Standard" value={mess} variant="standard" onChange={ e=> setmess(e.target.value)} /></div>

<div> <p>  URL Vidéo</p>
<TextField id="standard-basic" label="Standard" value={video} variant="standard" onChange={ e=> setvideo(e.target.value)} /></div>
            <div className='btn'>
                  <Button variant="contained" onSubmit={onSubmit} className='bouton'>Soumettre</Button>
                  </div>
            </div>
              <div className="rightbox">
                <div className='col-rb'>
                  <div className='ht'>
                    <h4 className='headerText'>Aperçu</h4>
                  </div>
                    <p>Durée: {duree} années</p>
                    <p className='description'>Message: {mess} </p>
                          
                    {/* <div className='video'><ReactPlayer
                      url={video}
                      autoPlay 
                      controls 
                    /> 
                    </div> */}
                
                 
                </div>
    
              </div>
        </div>
          


     
      );
    }
    
  export default Information;



