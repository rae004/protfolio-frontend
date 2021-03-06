import NavbarMenuItems from "./NavbarMenuItems";
import SimpleMenu from "./simpleMenu";
//todo finish nav and footer style changes.
const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark rae-nav-bar fixed-top">
        <div className="container">
            <a className="navbar-brand" href="/">My Portfolio</a>
            <NavbarMenuItems />
            <SimpleMenu />
        </div>
    </nav>
);

export default Navbar;