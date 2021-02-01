import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

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
                            &copy; {new Date().getFullYear()} Copyright: <a className="footer-link" href="https://rae=dev.com"> rae-dev.com </a>
                        </MDBContainer>
                    </div>
                </MDBFooter>
            </div>
    </footer>
);

export default Footer;