import React from 'react';

const CaseStudy = ({ title, type, problem, solution, result, execution, mediaContent, layout = 'stacked' }) => {
    const isTextFirst = layout === 'side-by-side' || layout === 'bottom-media';
    const layoutClass = `case-study-content ${layout === 'side-by-side' ? 'layout-side-by-side' : 'layout-stacked'}`;

    const textNode = (
        <div className="case-study-text">
            {problem && <p><strong>Problem:</strong> {problem}</p>}
            {solution && <p><strong>Solution:</strong> {solution}</p>}
            {result && <p><strong>Result:</strong> {result}</p>}
            {execution && <p><strong>Execution:</strong> {execution}</p>}
        </div>
    );

    const mediaNode = (
        <div className="case-study-media">
            {mediaContent}
        </div>
    );

    return (
        <div className="case-study">
            <div className="case-study-meta">
                <h3>{title}</h3>
                <div>{type}</div>
            </div>
            <div className={layoutClass}>
                {isTextFirst ? (
                    <>
                        {textNode}
                        {mediaNode}
                    </>
                ) : (
                    <>
                        {mediaNode}
                        {textNode}
                    </>
                )}
            </div>
        </div>
    );
};

export default CaseStudy;
