import React from 'react'
import './nameCard.css'

const NameCard = ({ names }) => {
    const nameCheapUrl =
        'https://www.namecheap.com/domains/registration/results/?domain='
    return (
        <a
            href={`${nameCheapUrl}${names}`}
            className="result-name-link"
            target="_blank"
            rel="noreferrer"
        >
            <div className="result-name-card">
                <p className="result-name">{names}</p>
            </div>
        </a>
    )
}

export default NameCard
