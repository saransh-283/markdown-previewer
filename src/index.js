import React from 'react';
import ReactDOM from 'react-dom';
import Markdown from '../src/components/react-components/react-main'
import '../src/assets/css/style.css'
import '../src/assets/css/mobile.css'
import TEXT from '../src/assets/js/main'

ReactDOM.render(
  <Markdown initial={TEXT}/>,
  document.getElementById('render')
);