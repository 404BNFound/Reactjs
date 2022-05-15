import './assets/css/Home.css';
import { Button } from '@material-ui/core';
import bg2 from './assets/images/terra.jpg'
import { Link } from 'react-router-dom'
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
            <p className='description'>Sauvegardez vos souvenirs pour le monde du futur</p>
          </div>

          <div className='btn'>
            <Link to="/Forfait">
              <Button variant="contained" className='bouton'> Commencez maintenant</Button>
            </Link>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Home;
