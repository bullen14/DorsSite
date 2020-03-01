import React, { Component } from "react"

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <header>
                <nav class="navbar navbar-light navbar-expand-lg fixed-top bg-white transparency border-bottom border-light" id="transmenu">
                    <div class="container"><a class="navbar-brand text-success" href="#header"><i class="fa fa-leaf fa-2x"></i>&nbsp;YOUR COMPANY</a><button data-toggle="collapse" class="navbar-toggler collapsed" data-target="#navcol-1"><span></span><span></span><span></span></button>
                        <div
                            class="collapse navbar-collapse" id="navcol-1">
                            <ul class="nav navbar-nav ml-auto">
                                <li class="nav-item" role="presentation"></li>
                                <li class="nav-item" role="presentation"></li>
                                <li class="nav-item" role="presentation"></li>
                                <li class="dropdown nav-item"><a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">Dropdown </a>
                                    <div class="dropdown-menu" role="menu"><a class="dropdown-item" role="presentation" href="#">First Item</a><a class="dropdown-item" role="presentation" href="#">Second Item</a><a class="dropdown-item" role="presentation" href="#">Third Item</a></div>
                                </li>
                            </ul>
                    </div>
        </div>
        </nav>
        <div class="bg-success d-flex align-items-center" style="height: 100vh;">
            <div class="text-center w-100 text-white">
                <h1>Lorem Ipsum</h1>
                <h2 class="font-weight-normal"><em>Asbolius praefectum Sericus</em></h2>
            </div>
        </div>
        </header>
        </div>
         );
    }
}
 
export default Header;