import React from 'react'
import './searchBox.css'

const Searchbox = ({ onChangeInput }) => {
    return (
        <div>
            
            <div className="search-container">
                <input
                    onChange={(e) => onChangeInput(e.target.value)}
                    type="text"
                    className="search-input"
                    placeholder="Type keywords"
                />
            </div>
           
        </div>
    )
}

export default Searchbox
