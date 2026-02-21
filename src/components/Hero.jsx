import React from 'react';

const Hero = () => {
    const scrollToWork = () => {
        const workSection = document.getElementById('work');
        if (workSection) {
            workSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    Translating institutional abuse into public evidence.
                </h1>
                <div className="hero-meta">
                    <div className="hero-role">Multimedia Journalist & Designer</div>
                    <div className="hero-contact">
                        <a href="mailto:dwayneaneckles@gmail.com">dwayneaneckles@gmail.com</a>
                        <span> · </span>
                        <span>Brooklyn, NY</span>
                    </div>
                </div>

                <button onClick={scrollToWork} className="scroll-indicator">
                    <span className="scroll-text">Scroll to see work</span>
                    <span className="scroll-arrow">↓</span>
                </button>
            </div>
        </section>
    );
};

export default Hero;
