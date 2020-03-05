import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        return (
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
        )
    }
}
