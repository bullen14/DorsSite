import React from "react"
import "./App.css"
import"./assets/bootstrap/css/bootstrap.min.css"
import"./assets/fonts/font-awesome.min.css"
import"./assets/css/Bootstrap-4---Photo-Gallery.css"
import"./assets/css/Contact-Form-Clean.css"
import"./assets/css/Parallax-Scroll-Effect.css"
import"./assets/css/Team-Boxed.css"
import Header from './Components/Header/Header'
import Parallax from './Components/Parallax/Parallax'
import About from './Components/About/About'
import PhotoGallery from './Components/PhotoGallery/PhotoGallery'
import Testimonials from './Components/Testimonials/Testimonials'
import ContactForm from './Components/ContactForm/ContactForm'
import Footer from './Components/Footer/Footer'
class App extends React.Component {
  
  componentDidMount () {
    function loadScript() {
    var scripts = []
    scripts.push("https://code.jquery.com/jquery-3.4.1.min.js")
    scripts.push("https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js")
    scripts.push("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js")
    scripts.push("https://raw.githubusercontent.com/johndigital/grayscale-js/master/grayscale.js")
      for (let index = 0; index < scripts.length; index++) {
        var script= document.createElement('script');
        script.type= 'text/javascript';
        script.src= scripts[index];
        script.async = true;
        document.body.appendChild(script);
      }
    }
    loadScript();
}
  render() {
    return (
      <div className="App">
         <Header/>
        <Parallax/>
        <About/>
        <PhotoGallery/>
        <Testimonials/>
        <ContactForm/>
        <Footer/>
    </div>
    )
  }
}
export default App
