import { Link } from 'react-router-dom'
import '../style/styles.css'
import { useState } from 'react'

export const Header = () => {
    const [homeTextColor, setHomeTextColor] = useState("#4a4646");
    const [projectTextColor, setProjectTextColor] = useState("#4a4646");
    const [aboutTextColor, setAboutTextColor] = useState("#4a4646");

    const changeHomeColor = () => {
        setHomeTextColor("#0e1734");
        setProjectTextColor("#4a4646");
        setAboutTextColor("#4a4646");
    }
    const changeProjectColor = () => {
        setHomeTextColor("#4a4646");
        setProjectTextColor("#0e1734");
        setAboutTextColor("#4a4646");
    }
    const changeAboutColor = () => {
        setHomeTextColor("#4a4646");
        setProjectTextColor("#4a4646");
        setAboutTextColor("#0e1734");
    }
    return (
        <div className="header">
            <ul>
                <Link className='homeBorder' onClick={changeHomeColor} style={{ borderColor: homeTextColor }} to='/'><li><img src='house-solid.svg' alt='home svg' />Home</li></Link>
                <Link className='projectBorder' onClick={changeProjectColor} style={{ borderColor: projectTextColor }} to ='/Projects'><li><img src='magnifying-glass-solid.svg' alt='search svg' />Projects</li></Link>
                <Link className='aboutBorder' onClick={changeAboutColor} style={{ borderColor: aboutTextColor }} to='/AboutMe'><li><img src='user-solid.svg' alt='user svg' />About me</li></Link>
            </ul>
        </div>
    )
}