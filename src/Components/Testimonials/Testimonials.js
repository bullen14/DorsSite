import React, { Component } from 'react'

export default class Testimonials extends Component {
    render() {
        return (
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
        )
    }
}
