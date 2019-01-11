import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

import { bigCalendarStyle } from '../styling/styles';

require('react-big-calendar/lib/css/react-big-calendar.css');

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment);
const allViews = ['month', 'week', 'day', 'agenda'];

export default class CustomBigCalendar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            eventsList: []
        };
    }

    render() {
        return (
            <BigCalendar
                style={bigCalendarStyle}
                events={this.state.eventsList}
                views={allViews}
                step={60}
                showMultiDayTimes
                defaultDate={new Date()}
                localizer={localizer}
            />
        )
    }
}