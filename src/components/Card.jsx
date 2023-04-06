import React from 'react'

export default function Card(props) {
    return (
        <div className="card--wrapper">
        <div className="card--container">
            <img src={props.imageUrl} className="card--image" />
            <div className="card--details">
                <div className="card--location_details">
                    <p className="card--location"><i className="fas fa-map-marker-alt"></i> {props.location}</p>
                    <a href={{props.googleMapsUrl}} target="_blank" className="card--link">View on Google Maps</a>
                </div>
                <h2 className="card--title">{props.title}</h2>
                <h2 className="card--dates">{props.startDate} - {props.endDate}</h2>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
            <hr />
        </div>

    )
}
