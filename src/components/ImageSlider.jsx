import React, { useState, useEffect } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    useEffect(() => {
        // autoSlide() decommenter pour lancer le slide
    }, [current])

    const autoSlide = () => {
        setTimeout(() => {
            nextSlide()
        }, 5000)
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='slider col-12'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        <p className="title">{slide.title}</p>
                        {index === current && (
                            <img src={slide.image} alt={slide.title} className='image img-fluid' />
                        )}

                    </div>
                );
            })}
            <div className="pagination">
                {SliderData.map((_, index) => {
                    return (
                        <span className={index === current ? 'dot-active' : 'dot'}></span>
                    )
                })}
            </div>
        </section>
    );
};

export default ImageSlider;