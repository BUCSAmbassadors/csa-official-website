// This file follows https://www.youtube.com/watch?v=dFaV95gS_0M in retrieving
// a list of dictionary of events data using google cal api
// run node googlecalendar.js in the terminal to see the results


const {google} = require('googleapis');
require('dotenv').config();

// Provide the required configuration
const CREDENTIALS = JSON.parse(process.env.GOOGLE_API_CREDENTIALS);
const calendarId = process.env.CALENDAR_ID;

// Google calendar API settings
const SCOPES = 'https://www.googleapis.com/auth/calendar';
const calendar = google.calendar({version : "v3"});

const auth = new google.auth.JWT(
    CREDENTIALS.client_email,
    null,
    CREDENTIALS.private_key,
    SCOPES
);

// Your TIMEOFFSET Offset
const TIMEOFFSET = '+05:30';

// Get date-time string for calender
const dateTimeForCalander = () => {

    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = `0${month}`;
    }
    let day = date.getDate();
    if (day < 10) {
        day = `0${day}`;
    }
    let hour = date.getHours();
    if (hour < 10) {
        hour = `0${hour}`;
    }
    let minute = date.getMinutes();
    if (minute < 10) {
        minute = `0${minute}`;
    }

    let newDateTime = `${year}-${month}-${day}T${hour}:${minute}:00.000${TIMEOFFSET}`;

    let event = new Date(Date.parse(newDateTime));

    let startDate = event;
    // get events within 1 year = 8760 hours (end time) from the moment of access
    let endDate = new Date(new Date(startDate).setHours(startDate.getHours()+8760));

    return {
        'start': startDate,
        'end': endDate
    }
};

// Get all the events between two dates
const getEvents = async () => {
    let dateTime = dateTimeForCalander();
    let dateTimeStart = dateTime['start'];
    let dateTimeEnd = dateTime['end'];
    try {
        let response = await calendar.events.list({
            auth: auth,
            calendarId: calendarId,
            timeMin: dateTimeStart,
            timeMax: dateTimeEnd,
            timeZone: 'Asia/Kolkata'
        });
    
        let items = response['data']['items'];
        return items;
    } catch (error) {
        console.log(`Error at getEvents --> ${error}`);
        return 0;
    }
};

getEvents()
    .then((res) => {
        console.log(res)
        // for(var i = 0; i < res.length; i++) {
        //     document.write(res[i].summary + ", " + res[i].start['dateTime'] + ", " + res[i].end['dateTime'] + " ")
        // }
    })
    .catch((err) => {
        console.log(err);
    });



// export function getAllEvents() {
//     getEvents()
//         .then((res) => {
//             return res;
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// }
// // module.exports = {
// //     getAllEvents: function () {
// //         getEvents()
// //         .then((res) => {
// //             return res;
// //         })
// //         .catch((err) => {
// //             console.log(err);
// //         });
// //     }
// // }
// // export default function getAllEvents () {
// //     getEvents()
// //     .then((res) => {
// //         return res;
// //     })
// //     .catch((err) => {
// //         console.log(err);
// //     });
// // }