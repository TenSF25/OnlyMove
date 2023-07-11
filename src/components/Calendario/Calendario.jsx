import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
// import moment from "@fullcalendar/moment";

import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

function Calendario() {
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Porfavor ingrese el titulo de su nuevo evento");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Estas seguro de que deseas eliminar el evento '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="0" backgroundColor="#151929" padding="27.75px">

        <Box mb="30px" style={{
            marginTop: "27px",
            marginLeft: "-1420px",
            padding:"30px"
        }}>
        <Typography
            variant="h2"
            color="#fff"
            fontWeight="bold"
            sx={{ m: "0 0 5px 0"}}
        >
        Calendario
        </Typography>
        <Typography variant="h5" color="#70d8bd">
        Agendate tus eventos
        </Typography>
        </Box>

      <Box display="flex" justifyContent="space-between">
        {/* Barra del calendario */}
        <Box style={{
          flex: "1 1 20%",
          backgroundColor: `#1F2A40`,
          p: "15px",
          borderRadius: "4px",
          width: "20px"
        }
        }
        >
          <Typography variant="h5" padding="23px">Events</Typography>
          <List style={{
            display: "block",
            height: "60vh",
            overflowY: "scroll",
            overflorX: "hidden",
            scrollBehavior: "smooth",
          }}>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: "#4cceac",
                  margin: "10px 0",
                  marginLeft: "5%",
                  borderRadius: "2px",
                //   maxHeight: "70px",
                width: "90%",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "15%"
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                     {event.startStr}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Calendario */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="70vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
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
                title: "Todo el dia",
                date: "2023-07-14",
              },
              {
                id: "5123",
                title: "Entregar Proyecto",
                date: "2023-07-10",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendario;