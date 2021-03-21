
const managerData = [
  {
    name : 'Amanda Chavez',
    service : 'Physiotherapy',
    date : '25 Jul 2020',
    time: '11:00 - 12:00'
  },
  
  {
    name : 'Flonna Wade',
    service : 'Physiotherapy',
    date : '25 Jul 2020',
    time: '11:00 - 12:00'
  },
  
  {
    name : 'Beatrice Carrol',
    service : 'Physiotherapy',
    date : '25 Jul 2020',
    time: '11:00 - 12:00'
  },
  
  {
    name : 'Jasmine Palmer',
    service : 'Physiotherapy',
    date : '25 Jul 2020',
    time: '11:00 - 12:00'
  },
  
  {
    name : 'Randy Elliot',
    service : 'Physiotherapy',
    date : '25 Jul 2020',
    time: '11:00 - 12:00'
  },
  
  {
    name : 'Christine Powell',
    service : 'Physiotherapy',
    date : '25 Jul 2020',
    time: '11:00 - 12:00'
  },
];


const StatsNumber = [{
  statsText :"Total Bookings",
  statsValue:"28,345"
},
{
  statsText:"Pending Approval",
  statsValue:"120"
},
{statsText:"New Clients",
statsValue:"89",
sign:'+'
},
{
  statsText:"Returning Clients",
  statsValue:"46%",
  sign:'-'
}

]

const book = [{
  header : 'Booking Reminder',
  text : 'Lorem ipsum dolor sit amet, consetetur'
},
{
  header : 'New Message',
  text : 'Lorem ipsum dolor sit amet, consetetur',
  msg : true
},
{
  header : 'UpComing Booking',
  text : 'Lorem ipsum dolor sit amet, consetetur'
},

]

  module.exports = {
    managerData,
    StatsNumber,
    book
  }