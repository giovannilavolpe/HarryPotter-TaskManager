
import { Link } from 'react-router-dom'
import { useSettingStore } from '../context/ContextSettings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

export default function Header () {
    const {borderTheme} = useSettingStore()
    return(
        <>
        <nav className= {borderTheme} style={{padding: "1rem",height: "4rem", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Link to="/pages/homescreen">
                <img style={{height: "4rem"}} src="https://upload.wikimedia.org/wikipedia/commons/4/44/Harry_Potter_TV_series_announcement_logo.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original" alt="Harry Potter" />
            </Link> 
            <Link to="/pages/settings">
                <FontAwesomeIcon icon={faGear} />
            </Link> 
        </nav>
        
        </>
    )
}