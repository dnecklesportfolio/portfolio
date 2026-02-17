import React from 'react';

const CaseStudy = ({ title, type, problem, solution, result, mediaContent }) => {
    return (
        <div className="case-study">
            <div className="case-study-meta">
                <h3>{title}</h3>
                <div>{type}</div>
            </div>
            <div className="case-study-content">
                <div className="case-study-text">
                    <p><strong>Problem:</strong> {problem}</p>
                    <p><strong>Solution:</strong> {solution}</p>
                    <p><strong>Result:</strong> {result}</p>
                </div>
                <div className="case-study-media">
                    {mediaContent}
                </div>
            </div>
        </div>
    );
};

export default CaseStudy;
