import React from 'react';
import '../Pane/Pane.css'
import '../Pane/Pane-mobile.css'
import Toggle from '../Toggle/toggle'

class Pane extends React.Component {
    render() {
        /**<div class="collapse navbar-collapse" id="navbarSupportedContent">
            </div> 
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>*/
        return <nav class="navbar navbar-expand-md navbar-light bg-light">
            <a class="navbar-brand" href="#">Markdown Previewer</a>
            

            
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-info" aria-hidden="true"></i>
                        </a>
                        
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <Toggle />
                    </li>
                </ul>
        </nav>
    }
}

export default Pane