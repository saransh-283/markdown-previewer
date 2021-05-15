import React from 'react';
import marked from 'marked'
import Pane from '../Pane/Pane'
import './react-style.css'
import './react-mobile.css'


class Markdown extends React.Component {
    constructor(props) {
        super(props)
        this.constants = {
            editor: document.getElementById('editor-pane'),
            resizer: document.getElementById('resizer'),
            preview: document.getElementById('preview-pane'),
            viewport: document.getElementsByTagName('body')[0],
            table: document.getElementsByTagName('table'),
            viewportWidth: 0,
            initialEditorWidth: 0
        }

        this.state = {
            editorWidth: '29.5vw',
            previewWidth: '70vw',
            text: this.props.initial,
            markdown: marked(this.props.initial)
        }

        this.handleChange = this.handleChange.bind(this)
        this.resizerMouseDown = this.resizerMouseDown.bind(this)
        this.documentMouseMove = this.documentMouseMove.bind(this)
        this.documentMouseUp = this.documentMouseUp.bind(this)


    }

    handleChange(event) {
        this.setState({ text: event.target.value, markdown: marked(event.target.value) })
    }

    resizerMouseDown() {
        this.constants.viewportWidth = this.constants.viewport.getBoundingClientRect().width

        document.body.addEventListener('mousemove', this.documentMouseMove)
        document.body.addEventListener('mouseup', this.documentMouseUp)
    }

    documentMouseMove(e) {
        var mousePosition = e.clientX

        this.setState({ editorWidth: `${(mousePosition * 100 / this.constants.viewportWidth)}vw` })
        this.setState({ previewWidth: `${100 - (mousePosition * 100 / this.constants.viewportWidth)}vw` })
    }

    documentMouseUp() {
        document.body.removeEventListener('mousemove', this.documentMouseMove)
    }

    render() {
        return <div>
            <Pane />
            <div id="main">
                <div id="editor-pane" style={{ width: this.state.editorWidth }}>
                    <textarea onChange={this.handleChange} value={this.state.text} id="editor"></textarea>
                </div>
                <div id="resizer" onMouseDown={this.resizerMouseDown}></div>
                <div id="preview-pane" style={{ width: this.state.previewWidth }}>
                    <div id="preview" dangerouslySetInnerHTML={{ __html: this.state.markdown }}></div>
                </div>
            </div>
        </div>
    }
}

export default Markdown