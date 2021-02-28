import NavbarMenuItems from "./NavbarMenuItems";
import SimpleMenu from "./simpleMenu";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container">
            <a className="navbar-brand" href="/">My Portfolio</a>
            <NavbarMenuItems />
            <SimpleMenu />
        </div>
    </nav>
);

export default Navbar;