import React, { Component } from 'react';
import './calc.css';

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = btn => {

        if(btn === "="){
            this.calculating()
        }

        else if(btn === "c"){
            this.reset()
        }
        else if(btn === "ce"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + btn
            })
        }
    };


    calculating = () => {
        var res = ''
        if(this.state.result.includes('--')){
            res = this.state.result.replace('--','+')
        }

        else {
            res = this.state.result
        }

        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(res) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "ERROR"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="body">
                    <div>Calculator</div>
                    this.state.result
                    this.onClick
                </div>
            </div>
        );
    }
}

export default App;
