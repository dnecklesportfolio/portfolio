import React from 'react';

const Navigation = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navigation">
            <div className="nav-container">
                <div className="nav-brand">Dwayne Neckles</div>
                <div className="nav-links">
                    <button onClick={() => scrollToSection('work')} className="nav-link">
                        Work
                    </button>
                    <span className="nav-divider">·</span>
                    <button onClick={() => scrollToSection('background')} className="nav-link">
                        Background
                    </button>
                    <span className="nav-divider">·</span>
                    <button onClick={() => scrollToSection('contact')} className="nav-link">
                        Contact
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
