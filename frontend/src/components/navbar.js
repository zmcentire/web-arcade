import React from 'react';
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle,
MDBDropdownMenu, MDBDropdownItem, MDBIcon} from 'mdbreact';

const Navbar = () => {
    return (
            <div>
                <MDBNavbar color="default-color" dark expand="md">
                    <MDBNavbarBrand>
                        <strong className="white-text">Arcade</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBNavLink to="/">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <MDBIcon icon="user" className="mr-1" />Profile
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default" right>
                                    <MDBDropdownItem href="/profile">My account</MDBDropdownItem>
                                    <MDBDropdownItem href="">Log out</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBNavbar>
            </div>
    )
}

export default Navbar