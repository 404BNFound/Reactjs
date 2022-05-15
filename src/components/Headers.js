import React from 'react';
function Headers(){
    return (
        <React.Fragment>
            <nav className="navbar navbar-light text-light navbar-expand-md fixed-top" id="mainNav" data-aos="zoom-in">
                <div className="container">
                    <a className="navbar-brand " href="#" style={{color: 'snow'}}  >SafeTrace</a>
                    <button data-bs-toggle="collapse" className="navbar-toggler navbar-toggler-right" data-bs-target="#navbarResponsive" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" value="Menu">
                        <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item nav-link "><a className="nav-link active" style={{color: 'snow'}}  href="#about">About</a></li>
                            <li className="nav-item nav-link "><a className="nav-link" style={{color: 'snow'}}  href="#download">Download</a></li>
                            <li className="nav-item nav-link "><a className="nav-link" style={{color: 'snow'}}  href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Headers;