import React from 'react'
import '../PunkaCard.css'
export default function PunkaCard({ beer }) {
    return (
        <div className="beer-card">
            <div>
                <img src={beer.image_url} alt={beer.name} />
            </div>
            <div>
            <h2>{beer.name}</h2>
            <p>pH: {beer.ph}</p>
            <p>SRM: {beer.srm}</p>
            <p>{beer.tagline}</p>
            </div>
        </div>
    );
}
