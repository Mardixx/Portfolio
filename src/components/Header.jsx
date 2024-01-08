import { Link } from 'react-router-dom'
import '../style/styles.css'

export const Header = () => {
    return (
        <div className="header">
            <ul>
                <Link to='/'><li><img src='house-solid.svg' alt='home svg'/>Home</li></Link>
                <Link to ='/Projects'><li><img src='magnifying-glass-solid.svg' alt='search svg'/>Projects</li></Link>
                <Link to='/AboutMe'><li><img src='user-solid.svg' alt='home svg'/>About me</li></Link>
            </ul>
        </div>
    )
}