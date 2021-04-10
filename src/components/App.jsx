import React, { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import ResultsContainer from './ResultsContainer/ResultsContainer'
import SearchBox from './SearchBox/SearchBox'
import Footer from './Footer/Footer'

const name = require('@rstacruz/startup-name-generator')
const App = () => {
    const [title, setTitle] = useState('Name It!')
    const [imageExpanded, setImageExpanded] = useState(true)
    const [textExpanded, setTextExpanded] = useState(true)
    const [suggestedNames, setSuggestedNames] = useState([])
    const handleInputChnage = (inputText) => {
        // alert("ooooh you clicked me ಠ_ಠ")
        // console.log(name(inputText))

        setImageExpanded(inputText ? false : true)
        setTextExpanded(inputText ? false : true)
        setSuggestedNames(inputText ? name(inputText) : [])
    }
    // console.log(name('cloud'))
    return (
        <div>
            <Header
                title={title}
                textExpanded={textExpanded}
                imageExpanded={imageExpanded}
            />
            <SearchBox onChangeInput={handleInputChnage} />
            <ResultsContainer suggestedNames={suggestedNames} />
            <Footer />
        </div>
    )
}

export default App
