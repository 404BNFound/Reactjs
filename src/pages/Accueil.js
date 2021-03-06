import React from 'react';
import { Carousel } from 'react-bootstrap';
function Accueil() {
    return (
        <React.Fragment>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 min-vh-100"
                        src="https://cdn.pixabay.com/photo/2022/03/10/08/27/planets-7059351_1280.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.pixabay.com/photo/2022/03/10/08/27/planets-7059351_1280.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.pixabay.com/photo/2022/03/10/08/27/planets-7059351_1280.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </React.Fragment>
    )
}

export default Accueil;