import {Link, NavLink, Outlet} from "react-router-dom";
import {CustomLink} from "./CustomLink";

export const Layout = () => {
    return (
        <>
            <header>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/about'>About</NavLink>
            </header>

            <main className='container'>
                {/* в Outlet вставится все остальное */}
                <Outlet/>
            </main>

            <footer className='container'>2023</footer>
        </>
    )
}