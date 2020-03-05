import React from "react"
import "./App.css"
import"./assets/bootstrap/css/bootstrap.min.css"
import"./assets/fonts/font-awesome.min.css"
import"./assets/css/Bootstrap-4---Photo-Gallery.css"
import"./assets/css/Contact-Form-Clean.css"
import"./assets/css/Parallax-Scroll-Effect.css"
import"./assets/css/Team-Boxed.css"
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
            <nav className="navbar navbar-light navbar-expand-md navbar navbar-expand-lg fixed-top" id="mainNav">
        <div className="container"><a className="navbar-brand js-scroll-trigger" href="https://www.google.com/">Brand</a><button data-toggle="collapse" className="navbar-toggler navbar-toggler-right" data-target="#navbarResponsive" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"
                value="Menu"><i className="fa fa-bars"></i></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item nav-link js-scroll-trigger" role="presentation"><a className="nav-link active js-scroll-trigger" href="#about">About</a></li>
                    <li className="nav-item nav-link js-scroll-trigger" role="presentation"><a className="nav-link js-scroll-trigger" href="#download">download</a></li>
                    <li className="nav-item nav-link js-scroll-trigger" role="presentation"><a className="nav-link js-scroll-trigger" href="#contact">contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <header className="masthead" styles={{ backgroundImage:`url(assets/img/intro-bg.jpg)` }}>
        <div className="intro-body">
            <div>
                <div id="box-2">
                    <h1>draft creation</h1>
                </div>
            </div>
        </div>
    </header>
    <section id="about" className="content-section text-center">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <h2>About grayscale</h2>
                    <p>Grayscale is a free Bootstrap theme. It can be yours right now, simply download the template on&nbsp;<a href="https://www.google.com/">the preview page</a>. The theme is open source, and you can use it for any purpose, personal or commercial.</p>
                    <p>This theme features stock photos by&nbsp;<a href="https://www.google.com/">Gratisography</a>&nbsp;along with a custom Google Maps skin courtesy of&nbsp;<a href="https://www.google.com/">Snazzy Maps</a>.</p>
                    <p>Grayscale includes full HTML, CSS, and custom JavaScript files along with SASS and LESS files for easy customization!</p>
                </div>
            </div>
        </div>
    </section>
    <section id="download" className="download-section content-section text-center" styles={{ backgroundImage:`url(assets/img/downloads-bg.jpg)` }}>
        <div className="container">
            <div className="col-lg-8 mx-auto">
                <h1>Download Grayscale</h1>
                <p>You can download Grayscale for free on the preview page.</p><button className="btn btn-primary btn-lg btn-default" type="button">visit download page</button></div>
        </div>
    </section>
    <div className="photo-gallery">
<div className="container-fluid">
  <div className="px-lg-5">

    <div className="row">
   
      <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div className="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294929/matthew-hamilton-351641-unsplash_zmvozs.jpg" alt="fuuu" className="img-fluid card-img-top"/>
          <div className="p-4">
            <h5> <a href="https://www.google.com/" className="text-dark">Red paint cup</a></h5>
            <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
              <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">JPG</span></p>
              <div className="badge badge-danger px-3 rounded-pill font-weight-normal">New</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div className="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/cody-davis-253928-unsplash_vfcdcl.jpg" alt="fuuu" className="img-fluid card-img-top"/>
          <div className="p-4">
            <h5> <a href="https://www.google.com/" className="text-dark">Blorange</a></h5>
            <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
              <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">PNG</span></p>
              <div className="badge badge-primary px-3 rounded-pill font-weight-normal">Trend</div>
            </div>
          </div>
        </div>
      </div>
     

   
      <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div className="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294928/nicole-honeywill-546848-unsplash_ymprvp.jpg" alt="fuuu" className="img-fluid card-img-top"/>
          <div className="p-4">
            <h5> <a href="https://www.google.com/" className="text-dark">And She Realized</a></h5>
            <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
              <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">JPG</span></p>
              <div className="badge badge-warning px-3 rounded-pill font-weight-normal text-white">Featured</div>
            </div>
          </div>
        </div>
      </div>
     

   
      <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div className="bg-white rounded shadow-sm">
          <img src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/dose-juice-1184444-unsplash_bmbutn.jpg" alt="fuuu" className="img-fluid card-img-top"/>
          <div className="p-4">
            <h5> <a href="https://www.google.com/" className="text-dark">DOSE Juice</a></h5>
            <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
              <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">JPEG</span></p>
              <div className="badge badge-success px-3 rounded-pill font-weight-normal">Hot</div>
            </div>
          </div>
        </div>
      </div>
     

   
      <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div className="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294926/cody-davis-253925-unsplash_hsetv7.jpg" alt="fuuu" className="img-fluid card-img-top"/>
          <div className="p-4">
            <h5> <a href="https://www.google.com/" className="text-dark">Pineapple</a></h5>
            <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
              <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">PNG</span></p>
              <div className="badge badge-primary px-3 rounded-pill font-weight-normal">New</div>
            </div>
          </div>
        </div>
      </div>
     

   
      <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div className="bg-white rounded shadow-sm">
          <img src="https://res.cloudinary.com/mhmd/image/upload/v1556294928/tim-foster-734470-unsplash_xqde00.jpg" alt="fuuu" className="img-fluid card-img-top"/>
          <div className="p-4">
            <h5> <a href="https://www.google.com/" className="text-dark">Yellow banana</a></h5>
            <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
              <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">JPG</span></p>
              <div className="badge badge-warning px-3 rounded-pill font-weight-normal text-white">Featured</div>
            </div>
          </div>
        </div>
      </div>
     

   
      <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div className="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/mike-meyers-737494-unsplash_yd11yq.jpg" alt="fuuu" className="img-fluid card-img-top"/>
          <div className="p-4">
            <h5> <a href="https://www.google.com/" className="text-dark">Teal Gameboy</a></h5>
            <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
              <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">JPEG</span></p>
              <div className="badge badge-info px-3 rounded-pill font-weight-normal">Hot</div>
            </div>
          </div>
        </div>
      </div>
     

   
      <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div className="bg-white rounded shadow-sm">
          <img src="https://res.cloudinary.com/mhmd/image/upload/v1556294930/ronald-cuyan-434484-unsplash_iktjid.jpg" alt="fuuu" className="img-fluid card-img-top"/>
          <div className="p-4">
            <h5> <a href="https://www.google.com/" className="text-dark">Color in Guatemala.</a></h5>
            <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
              <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">PNG</span></p>
              <div className="badge badge-warning px-3 rounded-pill font-weight-normal text-white">Featured</div>
            </div>
          </div>
        </div>
      </div>
     

   
      <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div className="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294929/matthew-hamilton-351641-unsplash_zmvozs.jpg" alt="fuuu" className="img-fluid card-img-top"/>
          <div className="p-4">
            <h5> <a href="https://www.google.com/" className="text-dark">Red paint cup</a></h5>
            <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
              <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">JPG</span></p>
              <div className="badge badge-danger px-3 rounded-pill font-weight-normal">New</div>
            </div>
          </div>
        </div>
      </div>
     

   
      <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div className="bg-white rounded shadow-sm">
          <img src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/cody-davis-253928-unsplash_vfcdcl.jpg" alt="fuuu" className="img-fluid card-img-top"/>
          <div className="p-4">
            <h5> <a href="https://www.google.com/" className="text-dark">Lorem ipsum dolor</a></h5>
            <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
              <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">PNG</span></p>
              <div className="badge badge-primary px-3 rounded-pill font-weight-normal">Trend</div>
            </div>
          </div>
        </div>
      </div>
     

   
      <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div className="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294928/nicole-honeywill-546848-unsplash_ymprvp.jpg" alt="fuuu" className="img-fluid card-img-top"/>
          <div className="p-4">
            <h5> <a href="https://www.google.com/" className="text-dark">Lorem ipsum dolor</a></h5>
            <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
              <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">JPG</span></p>
              <div className="badge badge-warning px-3 rounded-pill font-weight-normal text-white">Featured</div>
            </div>
          </div>
        </div>
      </div>
     

   
      <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div className="bg-white rounded shadow-sm">
          <img src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/dose-juice-1184444-unsplash_bmbutn.jpg" alt="fuuu" className="img-fluid card-img-top"/>
          <div className="p-4">
            <h5> <a href="https://www.google.com/" className="text-dark">Lorem ipsum dolor</a></h5>
            <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
              <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">JPEG</span></p>
              <div className="badge badge-success px-3 rounded-pill font-weight-normal">Hot</div>
            </div>
          </div>
        </div>
      </div>
     

    </div>
    <div className="py-5 text-right"><a href="https://www.google.com/" className="btn btn-dark px-5 py-3 text-uppercase">Show me more</a></div>
  </div>
</div>
</div>
    <div className="team-boxed">
        <div className="container">
            <div className="intro">
                <h2 className="text-center">Team </h2>
                <p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>
            </div>
            <div className="row people">
                <div className="col-md-6 col-lg-4 item">
                    <div className="box"><img className="rounded-circle" alt="dggdrgd" src="assets/img/1.jpg"/>
                        <h3 className="name">Ben Johnson</h3>
                        <p className="title">Musician</p>
                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                        <div className="social"><a href="https://www.google.com/"><i className="fa fa-facebook-official"></i></a><a href="https://www.google.com/"><i className="fa fa-twitter"></i></a><a href="https://www.google.com/"><i className="fa fa-instagram"></i></a></div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 item">
                    <div className="box">
                        <img className="rounded-circle" alt="dggdrgd" src="assets/img/2.jpg"/>
                        <h3 className="name">Emily Clark</h3>
                        <p className="title">Artist</p>
                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                        <div className="social"><a href="https://www.google.com/"><i className="fa fa-facebook-official"></i></a><a href="https://www.google.com/"><i className="fa fa-twitter"></i></a><a href="https://www.google.com/"><i className="fa fa-instagram"></i></a></div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 item">
                    <div className="box">
                        <img className="rounded-circle" alt="dggdrgd" src="assets/img/3.jpg"/>
                        <h3 className="name">Carl Kent</h3>
                        <p className="title">Stylist</p>
                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                        <div className="social"><a href="https://www.google.com/"><i className="fa fa-facebook-official"></i></a><a href="https://www.google.com/"><i className="fa fa-twitter"></i></a><a href="https://www.google.com/"><i className="fa fa-instagram"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="contact-clean">
        <form method="post">
            <h2 className="text-center">Contact us</h2>
            <div className="form-group"><input className="form-control" type="text" name="name" placeholder="Name"/></div>
            <div className="form-group"><input className="form-control is-invalid" type="email" name="email" placeholder="Email"/><small className="form-text text-danger">Please enter a correct email address.</small></div>
            <div className="form-group"><textarea className="form-control" name="message" placeholder="Message" rows="14"></textarea></div>
            <div className="form-group"><button className="btn btn-primary" type="submit">send </button></div>
        </form>
    </div>
    <footer>
        <div className="container text-center">
            <p>Copyright ©&nbsp;Brand 2020</p>
        </div>
    </footer>
    </div>
    )
  }
}

export default App
