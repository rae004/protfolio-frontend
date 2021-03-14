import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Added
import CssBaseline from "@material-ui/core/CssBaseline";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
