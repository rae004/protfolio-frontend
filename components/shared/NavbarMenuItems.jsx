const NavbarMenuItems = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link"  href="/portfolio/my-first-post-entry">Featured project</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/portfolio/my-second-post-entry">About me</a>
                </li>
            </ul>
        </div>
    )
}

export default NavbarMenuItems;