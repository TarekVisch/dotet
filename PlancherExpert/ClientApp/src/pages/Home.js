import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from "reactstrap";
import Services from '../components/Services';

const items = [
    {
        src: '/images/slide/slide-1.jpg',
        altText: 'Slide 1',
        caption: 'Slide 1',
        key: 1,
    },
    {
        src: '/images/slide/slide-2.jpg',
        altText: 'Slide 2',
        caption: 'Slide 2',
        key: 2,
    },
    {
        src: '/images/slide/slide-3.jpg',
        altText: 'Slide 3',
        caption: 'Slide 3',
        key: 3,
    },
];

const Home = (args) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} className="carousel-img" />
            </CarouselItem>
        );
    });

    return (
        <>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                {...args}
            >
                <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                />
                {slides}
            </Carousel>
            <div className="hero-text">
                <div>
                    <h2>Welcome to PlacherExpert</h2>
                    <h3>Transform Your Space with Exceptional Flooring Solutions</h3>
                    <p>At PlacherExpert, we understand the importance of a beautifully designed and well-finished floor. Whether you're looking to enhance the aesthetics of your home or revamp your commercial space, our expert flooring services have got you covered.</p>
                </div>
            </div>
            <Services />
        </>
    )
}
export default Home;
