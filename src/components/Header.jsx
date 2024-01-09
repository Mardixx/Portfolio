import { Link } from 'react-router-dom'
import '../style/styles.css'
import { useState } from 'react'

export const Header = () => {
    const [homeTextColor, setHomeTextColor] = useState("#0e1734");
    const [projectTextColor, setProjectTextColor] = useState("#4a4646");
    const [aboutTextColor, setAboutTextColor] = useState("#4a4646");

    const changeHomeColor = () => {
        setHomeTextColor("#0e1734");
        setProjectTextColor("#4a4646");
        setAboutTextColor("#4a4646");
    }
    const changeProjectColor = () => {
        setProjectTextColor("#0e1734");
        setHomeTextColor("#4a4646");
        setAboutTextColor("#4a4646");
    }
    const changeAboutColor = () => {
        setAboutTextColor("#0e1734");
        setProjectTextColor("#4a4646");
        setHomeTextColor("#4a4646");
    }
    return (
        <div className="header">
            <ul>
                <Link to='/'><li className='homeBorder' onClick={changeHomeColor} style={{ borderColor: homeTextColor  }}><img src='house-solid.svg' alt='home svg' />Home</li></Link>
                <Link to ='/Projects'><li className='projectBorder' onClick={changeProjectColor} style={{ borderColor: projectTextColor }}><img src='magnifying-glass-solid.svg' alt='search svg' />Projects</li></Link>
                <Link to='/AboutMe'><li className='aboutBorder' onClick={changeAboutColor} style={{ borderColor: aboutTextColor }}><img src='user-solid.svg' alt='user svg' />About me</li></Link>
            </ul>
        </div>
    )
}