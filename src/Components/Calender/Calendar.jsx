import React, { useState, useContext} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './MyCalendar.css'; 
import { ShopContext } from '../../Context/ShopContextProvider';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  
const {events, setEvents} = useContext(ShopContext);
  const [selectedDateEvents, setSelectedDateEvents] = useState([]);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title) {
      const newEvent = {
        order_id: events.length + Date.now(),
        title,
        start,
        end,
      };
      setEvents([...events, newEvent]);
    }
  };



  const handleEventClick = (event) => {
    const eventsOnClickedDate = events.filter((e) =>
      moment(e.start).isSame(moment(event.start), 'day')
    );
    setSelectedDateEvents(eventsOnClickedDate);
  };

  return (
    <div className="calendar-container">
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectSlot={handleSelect}
        onSelectEvent={handleEventClick} 
        selectable
      />
      </div>
      <div className="selected-date-events">
        <h3>Orders to be delivered on Selected Date:</h3>
        <ul>
          {selectedDateEvents.map((event) => (
            <li key={event.order_id}>{ `order Id:  ${event.order_id}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyCalendar;
