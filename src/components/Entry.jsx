import locationMarker from '../assets/marker.png'
import PropTypes from 'prop-types'
export default function Entry({img, title, country, googleMapsLink, dates, text}) {
    return (
        <article className="entry-container">
            <div className='place'>
                <img className='place-img' src={img.src} alt={img.alt} />
                <div className='place-info'>
                    <div className='country-name'>
                        <img src={locationMarker} alt="Location Marker" />
                        <span>{country}</span>
                        <a href={googleMapsLink}>View on Google Maps</a>
                    </div>
                    <div className='location-info'>
                        <h2>{title}</h2>
                        <span>{dates}</span>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

Entry.propTypes = {
    img: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    googleMapsLink: PropTypes.string.isRequired,
    dates: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

