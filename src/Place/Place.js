import icon from '../images/location.svg';
import './Place.css';
function Place(props) {
    return(
        <div className='places'>
            <div>
                <img src={require(`../images/${props.imageUrl}`)}
                     alt="location"
                     className='place--img'
                />
            </div>
            <div className='place--info'>
                <p className='place--location'>
                    <img src={icon} alt="location--icon"/>
                    {props.location}
                </p>
                <a
                    href={props.googleMapsUrl}
                    target='_blank'
                    rel='noreferrer'
                    className='place--google'
                >
                    Viev on Google Maps
                </a>
                <h1 className='place--heading'>{props.title}</h1>
                <p className='place--dates'>
                    {props.startDate} - {props.endDate}
                </p>
                <p className='place--description'>{props.description}</p>
            </div>
        </div>
    );
}

export default  Place;