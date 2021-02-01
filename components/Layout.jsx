import Navbar from './shared/Navbar';
import Footer from "./shared/Footer";

const Layout = ({ children }) => (
    <div className={"top-layout"}>
        <Navbar />
        <div className="main-container container">
            {children}
        </div>
        <Footer />
    </div>
)

export default Layout;