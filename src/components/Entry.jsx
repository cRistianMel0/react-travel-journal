import locationMarker from '../assets/marker.png'
import PropTypes from 'prop-types'
export default function Entry({entry}) {    
    return (
        <article className="entry-container">
            <div className='place'>
                <img className='place-img' src={entry.img.src} alt={entry.img.alt} />
                <div className='place-info'>
                    <div className='country-name'>
                        <img src={locationMarker} alt="Location Marker" />
                        <span>{entry.country}</span>
                        <a href={entry.googleMapsLink}>View on Google Maps</a>
                    </div>
                    <div className='location-info'>
                        <h2>{entry.title}</h2>
                        <span>{entry.dates}</span>
                        <p>{entry.text}</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

Entry.propTypes = {
    entry: PropTypes.object.isRequired
};

