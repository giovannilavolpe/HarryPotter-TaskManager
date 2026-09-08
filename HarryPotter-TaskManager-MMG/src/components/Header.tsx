
import { Link } from 'react-router-dom'

export default function Header () {

    return(
        <>
        <nav style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Link to="/pages/homescreen">
                <img style={{height: "2rem"}} src="https://upload.wikimedia.org/wikipedia/commons/4/44/Harry_Potter_TV_series_announcement_logo.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original" alt="Harry Potter" />
            </Link>
            <a>
            </a>
        </nav>
        
        </>
    )
}