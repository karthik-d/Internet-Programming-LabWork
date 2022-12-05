import react from 'react';

const Events = () => {
    return (
        <div id="Events__content">
            <div className="Events__wrapper">
                <div className="Events__unitWrapper">
                    <img className="Events__logo" src={require('../images/ml-workshop.jpg')} title="ML Hands-On Workshop"
                        alt="Could not load event poster!" />
                    <div className="Events__descWrapper">
                        <p className="Events__title">Hands-On Workshop on ML</p>
                        <p className="Events__date">on March 21<sup>st</sup>, 2022</p>
                        <p className="Events__location">at SSN College of Engineering</p>
                    </div>
                </div>
            </div>

            <div className="Events__wrapper">
                <div className="Events__unitWrapper">
                    <img className="Events__logo" src={require('../images/devathlon.jpeg')} title="Devathlon in action!"
                        alt="Could not load event snap!" />
                    <div className="Events__descWrapper">
                        <p className="Events__title">Devathlon: 7-day Tech Hackathon</p>
                        <p className="Events__date">from Oct 1<sup>st</sup>, 2021</p>
                        <p className="Events__location">at SSN College of Engineering</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Events;