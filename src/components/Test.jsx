import { useState, useEffect } from 'react'
import { Grid, Paper, Snackbar, Button, Backdrop, CircularProgress, Alert, AlertTitle } from '@mui/material'
import AnimatedNumber from 'react-animated-number'
import './assets/css/Test.css'
const Test = () => {
    const [open, setOpen] = useState(true);
    const handleClose = () => {
        setOpen(false);
    };
    const handleClick = () => {
        setOpen(true);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    const [number, setNumber] = useState(0)
    useEffect(() => {
        setNumber(4999)
    }, [])

    return (
            <div className="content" style={{textAlign:"center"}}>
                <AnimatedNumber
                    value={number}
                    style={{
                        fontSize: '4em',
                    }}
                    formatValue={n => n.toFixed(0)}
                    frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : { opacity: 1 }}
                    duration={2000}
                >
                </AnimatedNumber><span style={{fontSize:'2em'}}>Current investors</span>
            </div>
    );
}

export default Test;