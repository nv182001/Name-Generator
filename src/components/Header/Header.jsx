import React from 'react'
import './header.css'

const Header = ({ title, imageExpanded,textExpanded }) => {
    return (
        <div className="head-container">
            <img
                src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                className={`head-image ${
                    imageExpanded
                        ? 'head-image-expanded'
                        : 'head-image-contracted'
                }`}
                alt="headerImage"
            />
            <h1 className={`head-text ${
                    textExpanded
                        ? 'head-text-expanded'
                        : 'head-text-contracted'
                }`}>{title}</h1>
            
        </div>
    )
}

export default Header
