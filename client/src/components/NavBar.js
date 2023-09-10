import React from 'react';

const NavBar = () => {
    return (
        <header>
            <div class="header">
                <div class="head_left">
                    <img id="logo_img" src="/favicon.png" alt="icon"/>
                    <p>Ticket.che</p>
                </div>
                <div class="head_right">
                    <div>
                        <label class="switch">
                            <input type="checkbox"/>
                            <span class="slider"></span>
                        </label>
                    </div>
                    <a href="#openModal"><img id="header_img" src="/user.png" alt="icon"/></a>
                    <a href="/shopping_cart"><img id="header_img" src="/shopping_cart.png" alt="icon"/></a>
                </div>
            </div>
        </header>
    );
}

export default NavBar;
