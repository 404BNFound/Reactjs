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
import bgback1 from '../assets/img/classicforfait.png';
import bgback2 from '../assets/img/premiumforfait.png';
import bgback3 from '../assets/img/goldforfait.png';
import { Link } from 'react-router-dom'
function Forfait() {

    const compare = (a, b) => {
        return a.prix - b.prix;
    };

    const image = [
        bgback1, bgback2, bgback3
    ];

    const [myForfait, setMyForfait] = useState(null);
    const { datas: listForfait, isPending: listPending, err: teamErr } = useFetch("https://brainnotfoundserver.herokuapp.com/forfait");

    const taille = listForfait.length;
    return (
        <React.Fragment>
            <div className="p-5 mt-5 m-2 pb-5" data-aos="fade-down" >
                <h1 className="text-light display-1">Offre</h1>
                <p className="text-center mt-3 text-light">Il ne faut pas seulement faire les choses bien pour réussir ,il est tout aussi important de faire le bon choix.
                    Pour ainsi réaliser votre doux rêve de perpétuer votre existence.</p>
                <div className="row border-bottom pb-5">
                    <div className="card-group row ">
                        {
                            listForfait &&
                            listForfait.map((nforfait, index) => {
                                return (
                                    <div className={`m-3 card col-md-12 col-sm-12 col-xs-6 mt-2 round-me-left pb-4 ${index == taille - 1 && "border border-warning"}  `} key={`nforfait${index}`} data-aos="zoom-in-up" style={{ backgroundImage: `url("${image[index]}")`, backgroundSize: "cover" }}>
                                        <div className="card-body">
                                            <h1 className="card-title border-bottom text-light pb-3 mt-2">{nforfait.nom}</h1>
                                            <p className="h6 text-center text-muted  " >
                                                <strong>
                                                    <span className="h1 text-light"><NumberFormat value={nforfait.prix} thousandSeparator=" " decimalSeparator="," displayType={'text'} /></span>
                                                </strong><span className="  text-light"> €</span>
                                            </p>
                                            <div styles={{ backgroundColor: "rgba(255,255,255,0.5)" }}>
                                                <p className="ms-3 text-light border-bottom pb-3"></p>
                                                <div styles={{ backgroundColor: "rgba(0,0,0,0.5)" }}>


                                                    <div className="row pe-3 ps-3">
                                                        <div className="col-4 border-end text-light text-start ps-3 d-flex align-items-center mb-2">
                                                            Capsule
                                                        </div>
                                                        <div className="col-8 d-flex justify-content-start">
                                                            <Rating name="read-only" value={nforfait.niveauCapsule} readOnly size="small" max={(nforfait.niveauCapsule)} />
                                                        </div>
                                                    </div>
                                                    <div className="row pe-3 ps-3">
                                                        <div className="col-4 border-end text-light text-start ps-3 d-flex align-items-center mb-2">
                                                            Lieu
                                                        </div>
                                                        <div className="col-8 d-flex justify-content-start">
                                                            <Rating name="read-only" value={nforfait.niveauEndroit} readOnly size="small" max={(nforfait.niveauEndroit)} />
                                                        </div>
                                                    </div>

                                                    <div className="row pe-3 ps-3">
                                                        <div className="col-4 border-end text-light text-start ps-3 d-flex align-items-center mb-2">
                                                            Durée
                                                        </div>
                                                        <div className="col-8 d-flex text-light justify-content-start">
                                                            {nforfait.maxDuree} an{nforfait.maxDuree > 1 && "s"}
                                                        </div>
                                                    </div>
                                                    <div className="row pe-3 ps-3">
                                                        <div className="col-4 border-end text-light text-start ps-3 d-flex align-items-center mb-2">
                                                            Limite
                                                        </div>
                                                        <div className="col-8 d-flex text-light justify-content-start">
                                                            <NumberFormat value={nforfait.limiteTaille} thousandSeparator=" " suffix=" Mo" decimalSeparator="," displayType={'text'} />
                                                        </div>
                                                    </div>
                                                    <p className="card-text  text-light border-top pt-3">{nforfait.description}</p>
                                                    <Link to="/choixEndroit">
                                                        <Button variant="contained" onClick={() => { setMyForfait(nforfait); }} >
                                                            Go!!!
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                {/* <div className="mt-4">
                    <h1 className="text-light display-4">Comment choisir?</h1>
                </div> */}
            </div>
        </React.Fragment>
    )
}



export default Forfait;

