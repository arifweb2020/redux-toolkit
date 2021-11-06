import React from 'react';
import { useSelector } from 'react-redux';
const Nav = () => {
    const count = useSelector(state=>state.Counter)
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand" href="#">Logo</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link 2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{count}</a>
                    </li>
                </ul>
            </nav>


        </>
    );
}

export default Nav;