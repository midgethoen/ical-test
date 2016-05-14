var express = require('express');
var app = express();

var ical = require('ical-toolkit');



app.get('/cal.ics', function (req, res) {
  cal = ical.createIcsFileBuilder();
  cal.calname = 'Service';
  cal.method = 'REQUEST'
  var stop = new Date();
  stop.setHours(stop.getHours() + 1)
  cal.events.push({
    start: new Date(),
    end: stop,
    transp: 'OPAQUE',
    summary: 'Test Event',
    uid: 'test1234',
    method: 'PUBLISH',
    status: 'CONFIRMED',
  })
  res
    .type('text/calendar')
    .send(cal.toString())
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
