import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
            <path d="M1166 3518 c-3 -13 -6 -37 -6 -55 0 -44 -21 -60 -87 -69 -114 -13
            -148 -51 -159 -174 l-6 -77 -152 -5 c-166 -5 -201 -15 -226 -65 -12 -23 -16
            -121 -20 -531 l-5 -503 -140 -4 c-77 -2 -153 -7 -169 -12 -50 -15 -69 -53 -76
            -145 -3 -51 -13 -96 -24 -117 -22 -42 -25 -209 -5 -256 10 -22 15 -129 19
            -420 5 -331 8 -396 22 -427 9 -20 73 -96 143 -170 70 -73 160 -168 200 -211
            104 -109 111 -112 340 -112 158 -1 198 -4 237 -19 37 -14 64 -17 140 -13 51 3
            104 7 118 9 23 3 25 -1 28 -37 1 -22 5 -55 8 -72 5 -32 6 -33 54 -33 l50 0 0
            140 0 140 -88 0 c-74 0 -92 -3 -110 -20 -17 -16 -35 -20 -85 -20 -67 0 -78 6
            -102 54 -14 29 -59 33 -87 7 -20 -19 -34 -21 -178 -21 l-155 0 -78 78 c-42 42
            -77 82 -77 87 0 6 -59 69 -130 140 l-130 130 0 400 c0 390 -1 402 -20 423 -18
            19 -20 33 -18 100 l3 77 68 3 c68 3 68 3 105 -38 21 -22 44 -40 50 -40 8 0 12
            27 12 90 l0 90 -100 0 -100 0 0 50 0 50 150 0 150 0 0 -370 0 -370 50 0 50 0
            0 920 0 920 150 0 150 0 0 -172 0 -172 27 -28 c15 -15 37 -28 50 -28 l23 0 2
            328 3 327 77 5 c54 3 84 10 98 23 11 9 29 17 40 17 19 0 20 7 20 110 l0 110
            -49 0 c-42 0 -49 -3 -55 -22z"/>
            
      </SvgIcon>
    );
}

function Headers(){
    return (
        <React.Fragment >
            <nav className="navbar navbar-light text-light navbar-expand-md fixed-top" id="mainNav" data-aos="zoom-in">
                <div className="container">
                    <a className="navbar-brand " href="#" style={{color: "#ED156D"}}  >  <HomeIcon sx={{ color: "#ED156D" }}/> SafeTrace </a>
                    <button data-bs-toggle="collapse" className="navbar-toggler navbar-toggler-right" data-bs-target="#navbarResponsive" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" value="Menu">
                        <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item nav-link "><a className="nav-link active" style={{color: "#ED156D"}}  href="#about">ABOUT</a></li>
                            <li className="nav-item nav-link "><a className="nav-link" style={{color: "#ED156D"}}  href="#download">DOWNLOAD</a></li>
                            <li className="nav-item nav-link "><a className="nav-link" style={{color: "#ED156D"}}  href="#contact">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Headers;