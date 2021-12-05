//Calendar
//Mobile and desktop usage
mobiscroll.datepicker('#input-picker', {
    controls: ['calendar'],
    touchUi: true
});

mobiscroll.datepicker('#button-picker', {
    controls: ['calendar'],
    touchUi: true,
    showOnClick: false,
    showOnFocus: false
});

document
    .getElementById('show-picker')
    .addEventListener('click', function () {
        instance.open();
        return false;
    });

mobiscroll.datepicker('#mobi-picker', {
    controls: ['calendar'],
    touchUi: true
});

mobiscroll.datepicker('#inline-picker', {
    controls: ['calendar'],
    display: 'inline',
    touchUi: true
});

//Initializing the picker
mobiscroll.datepicker('#range', {
    controls: ['calendar']
});

mobiscroll.datepicker('#calendar', { //for multiple dates
    controls: ['calendar'],
    selectMultiple: true
});

mobiscroll.datepicker('#calendar', {
    controls: ['calendar'],
    display: 'inline'
});

//responsive behavior
responsive: {
    xsmall: {
        controls: ['calendar'],
        display: 'bottom',
        touchUi: true
    },
    small: {
        controls: ['calendar'],
        display: 'anchored',
        touchUi: true
    },
    custom: { // Custom breakpoint
        breakpoint: 800,
        controls: ['calendar'],
        display: 'anchored'
        touchUi: false
    }
}

//display
{
    display: 'inline',
    touchUi: true
}

{
    display: 'anchored',
    touchUi: true
}

{
    display: 'top',
    touchUi: true
}

{
    display: 'bottom',
    touchUi: true
}

{
    display: 'center',
    touchUi: true
}

//Activity
mobiscroll.setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

var activities = [{
        date: '2021-11-29T00:00',
        move: 200,
        exercise: 360,
        stand: 180
    }, {
        date: '2021-11-30T00:00',
        move: 360,
        exercise: 150,
        stand: 230
    }, {
        date: '2021-12-01T00:00',
        move: 180,
        exercise: 200,
        stand: 280
    }, {
        date: '2021-12-02T00:00',
        move: 120,
        exercise: 150,
        stand: 200
    }, {
        date: '2021-12-03T00:00',
        move: 320,
        exercise: 180,
        stand: 100
    }, {
        date: '2021-12-04T00:00',
        move: 120,
        exercise: 100,
        stand: 200
    }, {
        date: '2021-12-05T00:00',
        move: 230,
        exercise: 170,
        stand: 330
    }, {
        date: '2021-12-06T00:00',
        move: 320,
        exercise: 260,
        stand: 80
    }, {
        date: '2021-12-07T00:00',
        move: 200,
        exercise: 140,
        stand: 180
    }, {
        date: '2021-12-08T00:00',
        move: 360,
        exercise: 300,
        stand: 160
    }, {
        date: '2021-12-09T00:00',
        move: 80,
        exercise: 360,
        stand: 360
    }, {
        date: '2021-12-10T00:00',
        move: 220,
        exercise: 170,
        stand: 290
    }, {
        date: '2021-12-11T00:00',
        move: 120,
        exercise: 40,
        stand: 100
    }, {
        date: '2021-12-12T00:00',
        move: 120,
        exercise: 200,
        stand: 80
    }];

mobiscroll.datepicker('#demo-activity-calendar', {
    controls: ['calendar'],
    touchUi: true,
    display: 'inline',
    renderDayContent: function (args) {
        var a = activities.find(function (obj) { return +new Date(obj.date) === +args.date });

        function getDeg(nr) {
            return {
                rotate1: nr > 180 ? 180 : nr,
                rotate2: nr > 180 ? nr - 180 : 0
            }
        }

        function getStyle(rotate) {
            return ' style="transform: rotateZ(' + rotate + 'deg)"';
        }

        return '<div class="screen">' +
            '<div class="' + (a ? 'dial move' : '') + '">' +
            '<div class="dial-background"' + (a ? ' style="background:#752a2a"' : '') + '></div>' +
            '<div class="dial-container container1">' +
            '<div class="wedge"' + (a ? getStyle(getDeg(a.move).rotate1) : '') + '></div>' +
            '</div>' +
            '<div class="dial-container container2">' +
            '<div class="wedge"' + (a ? getStyle(getDeg(a.move).rotate2) : '') + '></div>' +
            '</div>' +
            '<div class="marker start"></div>' +
            '<div class="marker end"' + (a ? getStyle(a.move) : '') + '></div>' +
            '</div>' +
            '<div class="' + (a ? 'dial exercise' : '') + '">' +
            '<div class="dial-background"' + (a ? ' style="background:#4a6915"' : '') + '></div>' +
            '<div class="dial-container container1">' +
            '<div class="wedge"' + (a ? getStyle(getDeg(a.exercise).rotate1) : '') + '></div>' +
            '</div>' +
            '<div class="dial-container container2">' +
            '<div class="wedge"' + (a ? getStyle(getDeg(a.exercise).rotate2) : '') + '></div>' +
            '</div>' +
            '<div class="marker start"></div>' +
            '<div class="marker end"' + (a ? getStyle(a.exercise) : '') + '></div>' +
            '</div>' +
            '<div class="' + (a ? 'dial stand' : '') + '">' +
            '<div class="dial-background"' + (a ? ' style="background:#157b76"' : '') + '></div>' +
            '<div class="dial-container container1">' +
            '<div class="wedge"' + (a ? getStyle(getDeg(a.stand).rotate1) : '') + '></div>' +
            '</div>' +
            '<div class="dial-container container2">' +
            '<div class="wedge"' + (a ? getStyle(getDeg(a.stand).rotate2) : '') + '></div>' +
            '</div>' +
            '<div class="marker start"></div>' +
            '<div class="marker end"' + (a ? getStyle(a.stand) : '') + '></div>' +
            '</div>' +
            '</div>';
    },
});

//date selection
mobiscroll.datepicker('#picker', {
    controls: ['calendar']
});

//time selection
mobiscroll.datepicker('#picker', {
    controls: ['calendar', 'time'],
    touchUi: true
}

mobiscroll.datepicker('#picker', {
    controls: ['calendar', 'timegrid'],
    touchUi: true
}

//Views
//Week View
mobiscroll.datepicker('#picker', {
    calendarType: 'week',
    calendarSize: 2
}

//Month View
mobiscroll.datepicker('#picker', {
    calendarType: 'month',
    pages: 1
});

//Yearly View
mobiscroll.setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

var selectedDate = new Date();

var myCalendar = mobiscroll.datepicker('#demo-quarter-year-view', {
    controls: ['calendar'],
    display: 'inline',
    calendarType: 'month',
    calendarSize: 3,
    showWeekNumbers: true,
    renderCalendarHeader: function () {
        return '<div mbsc-calendar-nav></div>' +
            '<div class="quarter-year-header-picker">' +
            '<label><input mbsc-segmented type="radio" name="view" value="q1" class="md-quarter-year-view-change">Q1</label>' +
            '<label><input mbsc-segmented type="radio" name="view" value="q2" class="md-quarter-year-view-change">Q2</label>' +
            '<label><input mbsc-segmented type="radio" name="view" value="q3" class="md-quarter-year-view-change">Q3</label>' +
            '<label><input mbsc-segmented type="radio" name="view" value="q4" class="md-quarter-year-view-change">Q4</label>' +
            '<label><input mbsc-segmented typce="radio" name="view" value="year" class="md-quarter-year-view-change">Year</label></div>' +
            '<div mbsc-calendar-prev></div>' +
            '<div mbsc-calendar-next></div>';
    },
    onPageChange: function (event, inst) {
        selectedDate = event.firstDay;
        setType(mobiscroll.getInst(document.querySelectorAll('.md-quarter-year-view-change[value="year"]')[0]).checked);
    }
});

function setType(yearView) {
    var type = '';
    if (yearView) {
        type = 'year';
    } else {
        var month = selectedDate.getMonth();
        if (month < 3) {
            type = 'q1';
        } else if (month < 6) {
            type = 'q2';
        } else if (month < 9) {
            type = 'q3';
        } else {
            type = 'q4';
        }
    }
    mobiscroll.getInst(document.querySelectorAll('.md-quarter-year-view-change[value=' + type + ']')[0]).checked = true;
}

setTimeout(function () {
    document.querySelectorAll('.md-quarter-year-view-change').forEach(function (elm) {
        elm.addEventListener('change', function (ev) {
            var year = selectedDate.getFullYear();
            var type;
            var date;

            switch (ev.target.value) {
                case 'q1':
                    type = 'month';
                    date = new Date(year, 0, 1);
                    break;
                case 'q2':
                    type = 'month';
                    date = new Date(year, 3, 1);
                    break;
                case 'q3':
                    type = 'month';
                    date = new Date(year, 6, 1);
                    break;
                case 'q4':
                    type = 'month';
                    date = new Date(year, 9, 1);
                    break;
                case 'year':
                    type = 'year';
                    date = new Date(year, selectedDate.getMonth(), 1);
                    break;
            }
            myCalendar.setOptions({ calendarType: type });
            myCalendar.navigate(date);
        });
    });
    setType();
}, 1000);

//Switch Views
var myCalendar = mobiscroll.datepicker('#custom-header', {
    controls: ['calendar'],
    calendarType: 'week',
    calendarSize: 1,
    renderCalendarHeader: function () {
        return '<div mbsc-calendar-nav class="custom-view-nav"></div><div class="custom-view">' +
            '<label><input data-icon="material-date-range" mbsc-segmented type="radio" name="view" value="week" class="view-change" checked></label>' +
            '<label><input data-icon="material-event-note" mbsc-segmented type="radio" name="static-view" "month" class="view-change"></label></div>' +
            '<div mbsc-calendar-prev></div>' + 
            '<div mbsc-calendar-next></div>';
    }
}
                                
document.querySelectorAll('.view-change').forEach(function (elm) {
    elm.addEventListener('change', function (ev) {
        switch (ev.target.value) {
            case 'week':
			    myCalendar.setOptions({
				    calendarType: 'week'
			    });
			break;
		case 'month':
			    myCalendar.setOptions({
				    calendarType: 'month'
			    });
			break;
        }
    });
});

//labels
marked: [
    { 
        date: new Date(year, month, 2), 
        color: '#46c4f3'
    }, { 
        date: new Date(year, month, 10), 
        color: '#7e56bd'
    }, { 
        date: new Date(year, month, 13), 
        color: '#f13f77'
    }, { 
        date: new Date(year, month, 13), 
        color: '#89d7c9'
    }, { 
        date: new Date(year, month, 21), 
        color: '#ffc400'
    }, { 
        date: new Date(year, month, 21), 
        color: '#8dec7d'
    },{ 
        recurring: { 
            repeat: 'yearly', month: 4, day: 1
        },
        color: 'ffc400'
    }
]


//customizing view
mobiscroll.datepicker('#picker', {
    calendarScroll: 'horizontal',
    showWeekNumbers: false,
    showOuterDays: true
});

mobiscroll.datepicker('#date-picker', {
    controls: ['calendar'],
    selectMultiple: false
});

mobiscroll.datepicker('#datetime-picker', {
    controls: ['calendar', 'time'],
    selectMultiple: false
});

mobiscroll.datepicker('#date-time-grid', {
    controls: ['calendar', 'timegrid'],
    selectMultiple: false
});

//Multiple Date
mobiscroll.datepicker('#date-picker', {
    controls: ['calendar'],
    selectMultiple: true,
    selectCounter: true
});

//Week selection
mobiscroll.datepicker('#date-picker', {
    controls: ['calendar'],
    select: 'preset-range',
    firstSelectDay: 1
    selectSize: 7
});

//Start-end Selection
mobiscroll.datepicker('#picker', {
    select: 'range',
    rangeHighlight: true,
    showRangeLabels: true
});

//date types
cal = mobiscroll.datepicker('#cal', {
    returnFormat: 'jsdate'
});
cal.setVal(new Date(2020, 10, 15, 10, 45));
cal.getVal(); // returns the selected date

//date strings
cal = mobiscroll.datepicker('#cal', {
    returnFormat: 'iso8601'
});
cal.setVal('2020-05-20T12:30:00');
cal.getVal(); // returns the selected date

cal = mobiscroll.datepicker('#cal', {
    returnFormat: 'moment'
});
cal.setVal(moment([2020, 2, 6, 15, 30]));
cal.getVal(); // returns the selected date

//formatting values
{
    controls: ['calendar']
}
{
    controls: ['calendar'],
    dateFormat: 'DD.MM.YYYY'
}
{
    controls: ['calendar'],
    dateFormat: 'MMMM'
}
{
    controls: ['calendar'],
    dateFormat: 'D MMMM YYYY'
}
{
    controls: ['calendar'],
    dateFormat: 'MM/YYYY'
}
{
    controls: ['calendar'],
    dateFormat: 'DDD DD MMM, YYYY'
}
{
    controls: ['calendar'],
    dateFormat: 'YYYY-MM-DD'
}
{
    controls: ['calendar'],
    dateFormat: 'DDD, DD MMM YYYY'
}
{
    controls: ['time']
}
{
    controls: ['time'],
    timeFormat: 'hh:mm A'
}
{
    controls: ['time'],
    timeFormat: 'HH:mm'
}
{
    controls: ['time'],
    timeFormat: 'HH:mm:ss'
}
{
    controls: ['calendar', 'time'],
    timeFormat: 'HH:mm:ss'
}
{
    controls: ['calendar', 'time'],
    dateFormat: 'DDD D MMM, YYYY',
    timeFormat: 'H:mm',
    dateWheels: '|DDD D MMM, YYYY|'
}

//setting values
mobiscroll.datepicker('#picker', {
    controls: ['calendar']
});

mobiscroll.datepicker('#picker', {
    controls: ['calendar'],
    defaultSelection: new Date(2020, 11, 24)
});

document
    .getElementById('today')
    .addEventListener('click', function () {
        instance.setVal(new Date());
    }, false);

document
    .getElementById('jan')
    .addEventListener('click', function () {
        instance.setVal(new Date(2020, 0, 2));
    }, false);

var nowCal = mobiscroll.datepicker('#picker', {
    controls: ['calendar'],
    buttons: [{
        text: 'Now',
        handler: function () {
            nowCal.setVal(new Date());
            nowCal.close();
        }
    }, 'set', 'cancel']
});

var customCal = mobiscroll.datepicker('#picker', {
    controls: ['calendar'],
    buttons: [{
            text: '05 Jan 2020',
            handler: function (event, inst) {
                customCal.setVal(new Date(2020, 0, 5));
                customCal.close();
            }
        },
        'set', 'cancel'
    ]
});

mobiscroll.datepicker('#picker', {
    controls: ['calendar'],
    buttons: [{
        text: 'Close',
        handler: 'cancel'
    }]
});

//min and max values
mobiscroll.datepicker('#datepicker', {
    controls: ['calendar'],
    min: '1920-01-01',
    max: '2050-01-01'
});

//disabled values
mobiscroll.datepicker('#mycalendar', {
    controls: ['calendar'],
    invalid: [
		'2021-12-05',
		'2021-12-08',
		{
			recurring: {
				repeat: 'weekly',
				weekDays: 'SA,SU'
			}
		},
		{
			start: '2021-12-10',
			end: '2021-12-17'
		}
	]
});

//Recurrence
recurring: {
    repeat: 'daily',
    interval: 1
}
                          
// RRULE String
recurring: 'FREQ=DAILY;INTERVAL=1'

recurringExceptionRule: {
    repeat: 'monthly',
    day: 1,
    interval: 1
}
        
// RRULE String
recurringExceptionRule: 'FREQ=MONTHLY;BYMONTHDAY=1;INTERVAL=1'


//Looks
theme: 'ios',
themeVariant: 'dark'

mobiscroll.datepicker('#default', {
    controls: ['calendar']
    calendarType: 'week',
    weeks: 2
}

mobiscroll.datepicker('#header-order', {
    controls: ['calendar'],
    renderCalendarHeader: function () {
        return '<div mbsc-calendar-prev class="custom-prev"></div>' +
            '<div mbsc-calendar-nav class="custom-nav"></div>' +
            '<div mbsc-calendar-next class="custom-next"></div>';
    }
}

mobiscroll.datepicker('#today-button', {
    controls: ['calendar'],
    renderCalendarHeader: function () {
        return '<div mbsc-calendar-nav></div>' +
            '<div class="custom-buttons">' +
            '<div mbsc-calendar-prev></div>' +
            '<div mbsc-calendar-today></div>' +
            '<div mbsc-calendar-next></div>' +
            '</div>';
    }
}

var myCalendar = mobiscroll.datepicker('#custom-header', {
    controls: ['calendar'],
    calendarType: 'week',
    weeks: 2,
    renderCalendarHeader: function () {
        return '<div mbsc-calendar-nav class="custom-view-nav"></div><div class="custom-view">' +
            '<label><input data-icon="material-date-range" mbsc-segmented type="radio" name="view" value="week" class="view-change" checked></label>' +
            '<label><input data-icon="material-event-note" mbsc-segmented type="radio" name="static-view" "month" class="view-change"></label></div>' +
            '<div mbsc-calendar-prev></div>' + 
            '<div mbsc-calendar-next></div>';
    }
}
                                
document.querySelectorAll('.view-change').forEach(function (elm) {
    elm.addEventListener('change', function (ev) {
        switch (ev.target.value) {
            case 'week':
			    myCalendar.setOptions({
				    calendarType: 'week'
			    });
			break;
		case 'month':
			    myCalendar.setOptions({
				    calendarType: 'month'
			    });
			break;
        }
    });
});

mobiscroll.datepicker('#header-value', {
    controls: ['calendar'],
    calendarType: 'week',
    weeks: 2,
    headerText: 'You selected {value}'
}

