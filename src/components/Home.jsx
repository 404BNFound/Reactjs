import './assets/css/Home.css';
import { Button } from '@material-ui/core';
import bg2 from './assets/images/terra.jpg'
    
    function Home() {
      return (
        
        
          <div className='c'>
              <div className='left'><img src={bg2} width="920" height="700" /></div>
              <div className='right'>
              <div className='col-rb'>
                  <div className='ht'>
                    <h4 className='headerText'>Immortalisez votre existance</h4>
                  </div>
                  <div className='desc'>
                    <p className='description'>Sauvegarder vos souvenirs pour le monde du futur</p>
                  </div>
                
                  <div className='btn'>
                  <Button variant="contained" className='bouton'> Commencez-maintenant</Button>
                  </div>
                </div>
              </div>
              

          </div>
      );
    }
    
  export default Home;
