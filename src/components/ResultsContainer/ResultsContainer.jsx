import React from 'react'
import './resultsContainer.css'
import NameCard from '../NameCard/NameCard'
const ResultsContainer = ({ suggestedNames }) => {
    const listOfNames = suggestedNames.map((names, index) => {
        return <NameCard key={index} names={names} />
    })
    return (
        <div>
            <div className="results-container">{listOfNames}</div>

            
        </div>
    )
}

export default ResultsContainer
