import Layout from "../../layouts/Layout";
import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Row, Col, Calendar, Badge, Table } from "antd";

const Calender = () => {
  const [currentEvents, setCurrentEvents] = useState([]);

  // const getMonthData = (value) => {
  //     if (value.month() === 8) {
  //         return 1394;
  //     }
  // };

  // const monthCellRender = (value) => {
  //     const num = getMonthData(value);
  //     return num ? (
  //         <div className="notes-month">
  //             <section>{num}</section>
  //             <span>Backlog number</span>
  //         </div>
  //     ) : null;
  // };

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <>
      <Layout>
        <div class="container-fluid py-2 mt-5">
          <div style={{ display: "flex", "justify-content": "space-between" }}>
            <h3 className="text-uppercase">Départements</h3>
            <div>
              <button type="button" className="btn btn-primary p-2">
                ajouter département
              </button>
            </div>
          </div>
        </div>
        <div style={{ padding: "20px" }}>
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              //   listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2022-09-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2022-09-28",
              },
            ]}
          />
          {/* <Layout>
                <div class="container-fluid py-4">
                    <h3>Congées</h3>

                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24} >
                            <Calendar style={{ border: '1px solid lightgrey', padding: '10px' }} monthCellRender={monthCellRender} />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} >
                            <br />
                            <br />
                            <br />

                        </Col>
                    </Row>
                </div>
                 </Layout> */}
          {/* <Table dataSource={[{}]} columns={columns} />  dateCellRender={dateCellRender} */}
        </div>
      </Layout>
    </>
  );
};
export default Calender;
