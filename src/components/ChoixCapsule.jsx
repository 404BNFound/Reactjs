import { useState, useEffect } from 'react'
import './assets/css/ChoixCapsule.css';
import { Button, CircularProgress } from '@material-ui/core';
import useFetch from './hooks/useFetch'
import useWindowSize from './hooks/useWindowSize'
import { fontSize } from '@mui/system';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom'
// import AOS from 
function ChoixCapsule() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [preview, setPreview] = useState('')
  const [color, setColor] = useState('');
  const { datas, isPending, err } = useFetch('https://brainnotfoundserver.herokuapp.com/capsule')
  const { width } = useWindowSize()
  return (
    <div className="choixCapsule" data-aos="slide-down">
      <div className="chooseCapsule">
        {isPending &&
          <div className="" style={{ textAlign: 'center' }}><CircularProgress /></div>
        }
        {datas && datas.map((data) => (
          <div data-aos="slide-right" onClick={() => { setPreview(data) }} className="card" style={{
            margin: '10px',
            padding: '10px',
            wordWrap: 'break-word',
            '&:hover': {
              transform: 'scale(1.3)'
            }
          }}>
            <div>
              <img style={{ width: '100px', borderRadius: '50%' }} src={data.image} alt=""></img>
            </div>
            <div style={{ textAlign: 'center' }}>{data.nom}</div>
          </div>
        ))}
      </div>
      <div data-aos="fade" style={{ fontSize: '2vw', textAlign: 'center', margin: '50px' }}><h2>Choisissez une des capsules ci-dessus</h2></div>
      {!preview &&
        <div style={{ height: '60vh' }}></div>
      }
      {console.log(width)}
      {width > 1000 &&
        <>
          {preview &&
            <>
              <div data-aos="slide-right" style={{ display: 'flex', flexFlow: 'row', alignItems: 'center' }}>
                <div style={{ textAlign: 'center' }} className="previewCapsule">
                  <img style={{ borderRadius: '30%', width: '' }} src={preview.image} alt="" />
                </div>
                <div style={{ fontSize: '1.5vw' }}>
                  {preview.description}
                  <p>
                    <Link to="/information">
                      <Button variant='contained' style={{ color: 'white', backgroundColor: 'green' }}>Valider</Button>
                    </Link>
                  </p>
                </div>
              </div>
            </>
          }
        </>
      }
      {width < 1000 &&
        <>
          {preview &&
            <>
              <div data-aos="slide-left" style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
                <div style={{ textAlign: 'center' }} className="previewCapsule">
                  <img style={{ borderRadius: '30%', width: '' }} src={preview.image} alt="" />
                </div>
                <div style={{ fontSize: '25px' }}>
                  {preview.description}
                  <p style={{ textAlign: 'center' }}>
                    <Link to="/information">
                      <Button variant='contained' style={{ color: 'white', backgroundColor: 'green' }}>Valider</Button>
                    </Link>
                  </p>
                </div>
              </div>
            </>
          }
        </>
      }

    </div>
    //   <div className="container">
    //       <div className="leftbox"></div>
    //       <div className="rightbox">
    //         <div className='col-rb'>
    //           <div className='ht'>
    //             <h3 className='headerText'>Personalisez votre capsule</h3>
    //           </div>
    //           <div className='desc'>
    //             <p className='description'>Demarquez votre souvenir des autres en le rendant plus attrayant.</p>
    //           </div>
    //           <div className='color'>
    //             <div><i style={{color:'blue'}} class="fa-solid fa-circle-dot"></i></div>
    //             <div><i style={{color:'red'}} class="fa-solid fa-circle-dot"></i></div>
    //             <div><i style={{color:'green'}} class="fa-solid fa-circle-dot"></i></div>
    //           </div>
    //           <div className='btn'>
    //           <Button variant="contained" className='bouton'>Choisir</Button>
    //           </div>
    //         </div>
    //       </div>

    // </div>
  );
}

export default ChoixCapsule;
