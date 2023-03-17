import {Link, Outlet, Route, Routes} from "react-router-dom";


export const AboutPage = () => {
    return (
        <div>
            <h1>ABOUT PAGE</h1>
            <p>TEXT ABOUT</p>

            <ul>
                <li><Link to='contacts'>Our contacts</Link></li>
                <li><Link to='team'>Our team</Link></li>
            </ul>

            <Outlet/>
        </div>
    )
}
