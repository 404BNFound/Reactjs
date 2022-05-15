import './assets/css/Accueil.css';
import { Button } from '@material-ui/core';

    
    function Accueil() {
      return (
     
          <div className="container">
            <div className="leftbox"></div>
              <div className="rightbox">
                <div className='col-rb'>
                  <div className='ht'>
                    <h4 className='headerText'>Personalisez votre capsule</h4>
                  </div>
                  <div className='desc'>
                    <p className='description'>Demarquez votre souvenir vous des autres en le rendant plus attrayant.</p>
                  </div>
                
                  <div className='btn'>
                  <Button variant="contained" className='bouton'>Choisir</Button>
                  </div>
                </div>
    
              </div>
        </div>
      );
    }
    
  export default Accueil;
