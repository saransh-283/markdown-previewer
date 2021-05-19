import React from 'react';
import ReactDOM from 'react-dom';
import Markdown from '../src/components/Main/react-main'
import Toggle from '../src/components/Toggle/toggle'
import '../src/assets/css/style.css'
import '../src/assets/css/mobile.css'
import '../src/assets/css/dark.css'
import TEXT from '../src/assets/js/main'

ReactDOM.render( <
    Markdown initial = {
        TEXT
    }
    />,
    document.getElementById('render')
);


ReactDOM.render( < Toggle / > , document.getElementById('toggle'))