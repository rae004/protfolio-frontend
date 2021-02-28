import {MDBCol, MDBContainer, MDBFooter, MDBRow} from "mdbreact";
import DateFormat from "./format-datetime-string";

const getCurrentYear = () => {
    return JSON.stringify(new Date().getFullYear());
};

const Footer = () => (
    <footer className="footer portfolio-footer bg-primary align-content-end">
        <div className="container">
                <MDBFooter color="blue" className="font-small pt-4 mt-4">
                    <MDBContainer fluid className="text-center text-md-left">
                        <MDBRow>
                            <MDBCol md="6">
                                <div className="footer-title me-auto mb-2 mb-lg-0">Footer Content</div>
                                <p>
                                    Here Is a place to learn and explore. Reach out, share your thoughts about what you found. Always good to get feedback!
                                </p>
                            </MDBCol>
                            <MDBCol md="6">
                                <div className="footer-title me-auto mb-2 mb-lg-0">Links</div>
                                    <div className="footer-nav me-auto mb-2 mb-lg-0">
                                        <a className="footer-link"  href="/">Home</a>
                                        <br />
                                        <a className="footer-link"  href="/portfolio/my-first-post-entry">Featured project</a>
                                        <br />
                                        <a className="footer-link" href="/portfolio/my-second-post-entry">About me</a>
                                    </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <div className="footer-copyright text-center py-3">
                        <hr />
                        <MDBContainer fluid>
                            <small>&copy;<DateFormat dateString={getCurrentYear()} dateFormat={'yyyy'} />Copyright: <a className="footer-link" href="/"> rae-dev.com </a></small>
                        </MDBContainer>
                    </div>
                </MDBFooter>
            </div>
    </footer>
);

export default Footer;