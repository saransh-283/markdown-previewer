import React from 'react';
import marked from 'marked'
import '../react-components/react-style.css'


class Markdown extends React.Component{
    constructor(props){
        super(props)
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(event){
        document.getElementById('preview').innerHTML=marked(event.target.value)
    }
    render() {
        return <div id="main">
            <div id="editor-pane">
                <textarea onChange={this.handleChange} id="editor"></textarea>
            </div>
            <div id="resizer"></div>
            <div id="preview-pane">
                <div id="preview"></div>
            </div>
        </div>
    }
}

export default Markdown