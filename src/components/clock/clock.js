import React, { Component } from 'react';
import './clock.css';

class Clock extends Component {

    constructor(props) {
        super(props);

        var dateInfo = getDateInfo();

        this.state = {
            time: dateInfo.time,
            dayOfWeek: dateInfo.dayOfWeek,
            day: dateInfo.dayOfMonth,
            month: dateInfo.month,
            year: dateInfo.year
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(() =>
        this.updateClock(), 1000);

    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    updateClock() {
        var dateInfo = getDateInfo();

        this.setState({
            time: dateInfo.time,
            dayOfWeek: dateInfo.dayOfWeek,
            day: dateInfo.dayOfMonth,
            month: dateInfo.month,
            year: dateInfo.year
        });
    }


    render() {
        return (
            <div className="time">
                <p>{this.state.time}</p>
                <p className="smallDay">{this.state.dayOfWeek} {this.state.day} {this.state.month} {this.state.year}</p>
            </div>
        )
    }

}
function getDateInfo() {
    var date = new Date();

    return {
        time: date.toLocaleTimeString(),
        dayOfWeek: getDayOfWeek(date),
        dayOfMonth: date.getDate(),
        month: getMonth(date),
        year: date.getFullYear()
    };
}

function getDayOfWeek(date) {
    var day = date.getDay();

    switch (day) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        default:
            return 'Not sure what day it is!';
    }
}
function getMonth(date) {
    var month = date.getMonth();

    switch (month) {
        case 0:
            return 'January';
        case 1:
            return 'February';
        case 2:
            return 'March';
        case 3:
            return 'April';
        case 4:
            return 'May';
        case 5:
            return 'June';
        case 6:
            return 'July';
        case 7:
            return 'August';
        case 8:
            return 'September';
        case 9:
            return 'October';
        case 10:
            return 'November';
        case 11:
            return 'Decemeber';
        default:
            return '';
    }
}


export default Clock;
