import * as React from 'react';
import logo from '../assets/logo.svg';

function SideBar() {
    return (
        <nav>
            <a>
                <img src={logo} />
            </a>
            <a>Menu</a>
        </nav>
    );
}

export { SideBar as default };