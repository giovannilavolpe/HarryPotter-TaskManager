
import { BsGear } from "react-icons/bs"
export default function Header () {

    return(
        <>
        <nav style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <img style={{height: "2rem"}} src="https://upload.wikimedia.org/wikipedia/commons/4/44/Harry_Potter_TV_series_announcement_logo.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original"></img>
            <a>
                <BsGear color="gold"/>
            </a>
        </nav>
        
        </>
    )
}