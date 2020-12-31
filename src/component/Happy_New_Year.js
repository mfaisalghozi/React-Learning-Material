import React, { Component } from 'react'

class Happy_New_Year extends Component {
    
    state={
        hStyle : {color: 'black'},
        seconds : 0,
        minutes : 0,
        hours : 0
    }
    

    changeColor = () => {
        const colorData = ['green','red','blue','yellow','pink','purple','black','orange']
        let ran = Math.floor(Math.random() * 8) + 1
        this.setState({
            hStyle: {color: colorData[ran]}
        })
    }

    yearCountDown = () => {
        let d = new Date();
        var countDownDate = new Date("jan 1, 2021 00:00:00").getTime();
        var distance = countDownDate - d;
        //count hours = 24
        let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if(hour>-1){
        //count seconds = 00
        let sec = Math.floor((distance % (1000 * 60)) / 1000);
        //count minutes = 00
        let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.setState({
            seconds : sec,
            minutes: min,
            hours: hour
        })
        }
    }

    running = ()=>{
        this.changeColor();
        this.yearCountDown();
    }

    componentDidMount(){
        this.interval = setInterval(()=>this.running(),1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="background">
                <div className="countdown">
                    <h2>2021 :  {this.state.hours}h {this.state.minutes}m {this.state.seconds}s</h2>
                </div>
                <div className="content">
                    <h1 style={this.state.hStyle}><span className="wave">🎉</span> Happy New Year <span className="wave rtl">🎉</span></h1>
                </div>
                <p>made with <span className="wave">🤍</span> by MrafCommand</p>
            </div>
        )
    }
}

export default Happy_New_Year
