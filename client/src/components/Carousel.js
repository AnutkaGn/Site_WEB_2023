import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Carousel = () => {
    const carouselOptions = {
        type: 'slide',
        perPage: 1,
        rewind: true,
        gap: '1rem',
    };
    const slides = [
        { id: 1, title: 'Slide 1', content: 'This is slide 1.' },
        { id: 2, title: 'Slide 2', content: 'This is slide 2.' },
        { id: 3, title: 'Slide 3', content: 'This is slide 3.' },
    ];
    return (
        <Splide options={carouselOptions}>
            {slides.map((slide) => (
                <SplideSlide key={slide.id}>
                    <div className="slide">
                        <h2>{slide.title}</h2>
                        <p>{slide.content}</p>
                    </div>
                </SplideSlide>
            ))}
        </Splide>
    );
}

export default Carousel;
