import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';

import PaidIcon from '@mui/icons-material/Paid';
import { WorkHistoryOutlined } from "@mui/icons-material";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NumberFormat from 'react-number-format';
import useFetch from "../hooks/useFetch";
import '../assets/css/cardprice.css';

function Forfait() {

    const compare = ( a, b ) => {
        return a.prix - b.prix;
    };

    const [myForfait, setMyForfait] = useState(null);
    const { datas: listForfait, isPending: listPending, err: teamErr } = useFetch("https://brainnotfoundserver.herokuapp.com/forfait");
    
    const taille = listForfait.length;
    return (
        <React.Fragment>
            <div className="p-5 mt-5 m-2 pb-5" data-aos="fade-down" >
                <h1 className="text-light display-1">Offre</h1>
                <p className="text-center mt-3 text-light">Here will be the explication. A looooooooong, very long, sentences. Writed to make sense.</p>
                <div className="row border-bottom pb-5">
                    <div className="card-group">
                        {
                            listForfait &&
                            listForfait.map((nforfait, index)=> {
                                return (
                                    <div className={`m-3 card mt-2 round-me-left pb-4 ${index==taille-1 && "border border-warning"}  `} key={`nforfait${index}`} data-aos="zoom-in-up">
                                        <div className="card-body">
                                            <h1 className="card-title border-bottom pb-3 text-light">{nforfait.nom}</h1>
                                            <p className="h6 text-center text-muted  text-light" >
                                                <strong>
                                                    <span className="h1 text-light"><NumberFormat value={nforfait.prix} thousandSeparator=" " decimalSeparator="," displayType={'text'}/></span>
                                                </strong><span className="  text-light"> €</span>
                                            </p>
                                            <p className="card-text  text-light border-bottom pb-3">{nforfait.description}</p>
                                            
                                            <p className="ms-3 text-light">Stats</p>
                                            <div className="row pe-3 ps-3">
                                                <div className="col-4 border-end text-light text-start ps-3 d-flex align-items-center mb-2">
                                                    Capsule
                                                </div>
                                                <div className="col-8 d-flex justify-content-start">
                                                    <Rating name="read-only" value={nforfait.niveauCapsule} readOnly  size="small" max={(nforfait.niveauCapsule)}/>
                                                </div>
                                            </div>
                                            <div className="row pe-3 ps-3">
                                                <div className="col-4 border-end text-light text-start ps-3 d-flex align-items-center mb-2">
                                                    Lieu
                                                </div>
                                                <div className="col-8 d-flex justify-content-start">
                                                    <Rating name="read-only" value={nforfait.niveauEndroit} readOnly  size="small" max={(nforfait.niveauEndroit)}/>
                                                </div>
                                            </div>
                                            <br/>
                                            <Button variant="contained" onClick={() => {setMyForfait(nforfait);}} >
                                                Go!!!
                                            </Button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
                <div className="mt-4">
                    <h1 className="text-light display-4">Comment choisir?</h1>
                </div>
            </div>
        </React.Fragment>
    )
}



export default Forfait;

