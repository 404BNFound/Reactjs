
import useFetch from './hooks/useFetch'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import './assets/css/ChoixEndroit.css'
import { useState } from 'react';
const ChoixEndroit = () => {
    const { datas, isPending, err } = useFetch('http://localhost:3001/endroit')
    const [destination, setDestination] = useState(null)
    const handleValidate = () => {

    }
    return (
        <div className='choixEndroit'>
            <div className="text" style={{ fontWeight: '700' }}>
                CHOISISSEZ UNE DESTINATION POUR VOTRE CAPSULE <i class="fa-solid fa-circle-arrow-down"></i>
            </div>
            {destination &&
                <div class="selected">
                    <div className="image">
                        <img style={{ height: "50vh",borderRadius:'10%' }} src={destination.image} alt="" />
                    </div>
                    <div className="desc" style={{fontWeight:'700', fontSize:'5vh'}}>
                        {destination.nom}
                        <p className='description' style={{fontWeight:'400', fontSize:'14px'}}>
                        {destination.description}
                        </p>
                        <p>
                            <Link to="/choixCapsule">
                                <Button sx={{
                                backgroundColor:'green',
                                color:'white',
                                padding:'10px',
                            }} onClick={()=>{handleValidate()}}>
                                Valider
                            </Button>
                            </Link>
                            
                        </p>
                    </div>
                </div>
            }
            <div className="places">
                {datas && datas.map((data) => (
                    <div className="card" onClick={() => { setDestination(data) }}>
                        <Card sx={{ maxWidth: 300, margin: '30px' }}>
                            <CardMedia
                                component="img"
                                height="150vh"
                                image={data.image}
                                alt="green iguana"
                            />
                            <CardContent sx={{ backgroundColor: '#070B1F', color: 'white' }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {data.nom}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default ChoixEndroit;