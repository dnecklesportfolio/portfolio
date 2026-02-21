import React from 'react';
import CaseStudy from './CaseStudy';
import AutoScrollCarousel from './AutoScrollCarousel';

const Work = () => {
    return (
        <section id="work" className="work-section">
            <h2>Work</h2>

            <CaseStudy
                title="Stop Deed Theft vs. 79th Precinct: The Charrington Case"
                type={<>Visual Investigation — Instagram Carousel / <a href="https://www.instagram.com/stopdeedtheft/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>@stopdeedtheft</a></>}
                problem="A homeowner's case was being buried through institutional denial — police refusing to file reports, officials ignoring Supreme Court orders. The abuse was invisible because it was hidden behind badges and procedural language."
                solution="A multi-slide visual essay juxtaposing legal documents against on-the-ground footage of the home invasion, stripping anonymity from the actors involved and making the paper trail publicly readable."
                result="34,600+ reach, 31,000+ views. Turned a case the system was suppressing into a public record that created accountability pressure."
                mediaContent={
                    <AutoScrollCarousel speed={0.6}>
                        <img src="/assets/carmella-slide-1.png" alt="Charrington Case Slide 1" style={{ height: '300px', width: 'auto', flexShrink: 0 }} />
                        <img src="/assets/carmella-slide-2.png" alt="Charrington Case Slide 2" style={{ height: '300px', width: 'auto', flexShrink: 0 }} />
                        <img src="/assets/carmella-slide-3.png" alt="Charrington Case Slide 3" style={{ height: '300px', width: 'auto', flexShrink: 0 }} />
                        <img src="/assets/carmella-slide-5.png" alt="Charrington Case Slide 5" style={{ height: '300px', width: 'auto', flexShrink: 0 }} />
                        <img src="/assets/carmella-slide-7.png" alt="Charrington Case Slide 7" style={{ height: '300px', width: 'auto', flexShrink: 0 }} />
                    </AutoScrollCarousel>
                }
            />

            <CaseStudy
                title="168 Patchen Avenue: The Florence Case"
                type={<>Visual Investigation — Video / <a href="https://www.instagram.com/stopdeedtheft/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>@stopdeedtheft</a></>}
                problem="A Bed-Stuy homeowner's property was taken through mortgage fraud. The family contacted every level of enforcement — the DA, the Attorney General, the Governor's office, NYPD's 81st Precinct — and got nothing. Meanwhile, the property was being destroyed from the inside."
                solution="A two-minute vertical video builds the case visually — opening with photos of the home before the damage, then cutting to November 2025 footage of the gutted interior, exposed electrical systems, and unauthorized occupants. The officials who were contacted — DA, AG, Governor, presiding judge — are composited as a persistent layer over the footage, so the viewer watches the destruction unfold with the faces of the people who allowed it locked on screen. The inaction and the consequences are never separated."
                result="3,888 views, 2,612 reach, 307 interactions, 23+ hours of watch time. Created a public evidence trail for the homeowner's advocates and an intake channel for other mortgage fraud victims."
                mediaContent={
                    <video controls playsInline style={{ width: 'auto', maxWidth: '360px', maxHeight: '80vh', display: 'block', margin: '0 auto', borderRadius: '4px', background: '#1a1a1a' }}>
                        <source src="/assets/florence-case.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                }
            />

            <CaseStudy
                title="One-Tap Mobilizer"
                type="Web Application — Built for Dr. June's Campaign"
                problem="Filing a complaint against an inactive elected official requires researching the right agencies, finding contact information, and drafting legally specific language. Most supporters never get past step one."
                solution="A React-based tool that automates the entire chain — pre-loaded with direct contacts at the Queens DA's office and relevant oversight bodies, formatted with legally specific demands."
                result="Reduced the time from intent to action from roughly 20 minutes to under 10 seconds. Enabled supporters with no legal background to send correctly formatted complaints at scale. This wasn't just a UI exercise. Shortly after the tool went live, the Queens District Attorney's office—specifically Melinda Katz's team—responded. They called a supporter to discuss the case details."
                mediaContent={
                    <video controls playsInline style={{ width: '100%', borderRadius: '4px' }}>
                        <source src="/assets/dr-june-mobilizer.mov" type="video/quicktime" />
                        <source src="/assets/dr-june-mobilizer.mov" type="video/mp4" />
                        {/* Note: .mov might not play in all browsers without conversion, but mostly fine in modern ones or if container is mp4 compatible */}
                        Your browser does not support the video tag.
                    </video>
                }
            />
        </section>
    );
};

export default Work;
