import React from 'react';
import '../Toggle/toggle.css'

class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = { toggled: false }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({ toggled: !this.state.toggled })
        document.body.className=`${!this.state.toggled}`
    }
    render() {
        return <div onClick={this.handleClick} className={`toggle ${this.state.toggled}`}>
            <div className="notch"></div>
        </div>
    }
}

export default Toggle