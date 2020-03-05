import React, { Component } from 'react'
import Image from "../Image/Image";

export default class PhotoGallery extends Component {
    render() {
        return (
            <div className="photo-gallery">
            <div className="container-fluid">
              <div className="px-lg-5">
               <div className="row">
                <Image/>
                <Image/>
                <Image/>
                <Image/>
                <Image/>
                <Image/>
                <Image/>
          </div>
        </div>
      </div>
      </div>
        )
    }
}
