import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}
