window.onload = function()
{
	var date = getTime();
	var locations = getLocations();
	locations.map(
		function(location) { return updateDOM(date, location); }
	);
}

function getTime()
{
	var jsDate = new Date();
	var prettyDate = {};
	// Note: getMonth returns 0-11
	prettyDate.month = jsDate.getMonth();
	// Note: getDate returns 1-31
	prettyDate.date = jsDate.getDate();

	// Corrects for Daylight savings
	if (prettyDate.month <= 2 || prettyDate.month >= 10)
	{
		if ((prettyDate.month == 2 && prettyDate.date < 8) || (prettyDate.month != 2))
		{
			jsDate.setUTCHours(jsDate.getUTCHours()-5);
		}
	}
	else
	{
		jsDate.setUTCHours(jsDate.getUTCHours()-4);
	}

	// Note: Sunday is 0, Monday is 1, and so on.
	prettyDate.day = jsDate.getUTCDay();
	// note: getHours returns 0-23
	prettyDate.hour = jsDate.getUTCHours();
	prettyDate.minutes = jsDate.getUTCMinutes();

	if (prettyDate.minutes.toString().length !== 1)
	{
		prettyDate.military = parseInt("" + prettyDate.hour + prettyDate.minutes);
	}
	else
	{
		prettyDate.military = parseInt("" + prettyDate.hour + 0 + prettyDate.minutes);
	}
	
	return prettyDate;
}

function updateDOM(date, location)
{
	var open = false;
	// If it is open today
	if ((location.hours[date.day].open &&
		// If later or equal to opening time and before closing time
		 date.military >= location.hours[date.day].open &&
		 date.military < location.hours[date.day].close) ||
		// or if they are open after midnight and it is before that closing time
		(location.hours[date.day].lateNightClose &&
		 date.military < location.hours[date.day].lateNightClose))
	{
		// Show green, hide red
		document.getElementById(location.id + "Open").style.display = "block";
		document.getElementById(location.id + "Closed").style.display = "none";
	} // otherwise default behavior of showing red and hiding green
	else
	{
		document.getElementById(location.id + "Open").style.display = "none";
		document.getElementById(location.id + "Closed").style.display = "block";
	}
}

function getLocations()
{
	return
	[
		// MORE Store
		{
			"id": "moreStore",
			"displayName" : "MORE Store",
			"telephoneNumber": "(914) 251-4498",
			"displayHours": "Monday - Thursday:  8:00 am - 12:00 am<br>" +
							"Friday:  8:00 am - 1:00 am<br>" +
		                    "Saturday:  11:00 am - 1:00 am<br>" +
		                    "Sunday:  11:00 am - 12:00 am",
			"hours":
			[
				// Use 24 hour time for simplicity
				{ "lateNightClose": 100,       // Sunday Morning
				  "open": 1100, "close": 2359}, // Sunday
				{ "open": 800, "close": 2359}, // Monday
				{ "open": 800, "close": 2359}, // Tuesday
				{ "open": 800, "close": 2359}, // Wednesday
				{ "open": 800, "close": 2359}, // Thursday
				{ "open": 800, "close": 2359}, // Friday
				{ "lateNightClose": 100,       // Saturday Morning
				  "open": 1100, "close": 2359}  // Saturday
			]
		},
		// MORE Card
		{
			"id": "moreCard",
			"hours":
			[
				{ }, // Sunday
				{ "open": 830, "close": 1700}, // Monday
				{ "open": 830, "close": 1700}, // Tuesday
				{ "open": 830, "close": 1700}, // Wednesday
				{ "open": 830, "close": 1700}, // Thursday
				{ "open": 830, "close": 1700}, // Friday
				{ }  // Saturday
			]
		},
		// Starbucks
		{
			"id": "starbucks",
			"hours":
			[
				{ "open": 1000, "close": 2300}, // Sunday
				{ "open": 730, "close": 2300}, // Monday
				{ "open": 730, "close": 2300}, // Tuesday
				{ "open": 730, "close": 2300}, // Wednesday
				{ "open": 730, "close": 2300}, // Thursday
				{ "open": 730, "close": 2300}, // Friday
				{ "open": 1000, "close": 2300}  // Saturday
			]
		},
		// Parking and Transportation
		{
			"id": "parking",
			"hours":
			[
				{ }, // Sunday
				{ "open": 830, "close": 1700}, // Monday
				{ "open": 830, "close": 1700}, // Tuesday
				{ "open": 830, "close": 1700}, // Wednesday
				{ "open": 830, "close": 1700}, // Thursday
				{ "open": 830, "close": 1700}, // Friday
				{ }  // Saturday
			]
		},
		// CTS
		{
			"id": "cts",
			"hours":
			[
				{ }, // Sunday
				{ "open": 800, "close": 1945}, // Monday
				{ "open": 800, "close": 1945}, // Tuesday
				{ "open": 800, "close": 1945}, // Wednesday
				{ "open": 800, "close": 1945}, // Thursday
				{ "open": 800, "close": 1645}, // Friday
				{ }  // Saturday
			]
		},
		// Counseling
		{
			"id": "counseling",
			"hours":
			[
				{ }, // Sunday
				{ "open": 830, "close": 1700}, // Monday
				{ "open": 830, "close": 1700}, // Tuesday
				{ "open": 830, "close": 1700}, // Wednesday
				{ "open": 830, "close": 1700}, // Thursday
				{ "open": 830, "close": 1700}, // Friday
				{ }  // Saturday
			]
		},
		// Advising
		{
			"id": "advising",
			"hours":
			[
				{ }, // Sunday
				{ "open": 830, "close": 1700}, // Monday
				{ "open": 830, "close": 1700}, // Tuesday
				{ "open": 830, "close": 1700}, // Wednesday
				{ "open": 830, "close": 1700}, // Thursday
				{ "open": 830, "close": 1700}, // Friday
				{ }  // Saturday
			]
		},
		// Career Development Center
		{
			"id": "cdc",
			"hours":
			[
				{ }, // Sunday
				{ "open": 830, "close": 1700}, // Monday
				{ "open": 830, "close": 1700}, // Tuesday
				{ "open": 830, "close": 1830}, // Wednesday
				{ "open": 830, "close": 1700}, // Thursday
				{ "open": 830, "close": 1600}, // Friday
				{ }  // Saturday
			]
		},
		// Learning Center
		{
			"id": "learning",
			"hours":
			[
				{ }, // Sunday
				{ "open": 1000, "close": 1700}, // Monday
				{ "open": 1000, "close": 1700}, // Tuesday
				{ "open": 1000, "close": 1700}, // Wednesday
				{ "open": 1000, "close": 1700}, // Thursday
				{ "open": 1000, "close": 1700}, // Friday
				{ }  // Saturday
			]
		},
		// Neuberger
		{
			"id": "neuberger",
			"hours":
			[
				{ "open": 1200, "close": 1700}, // Sunday
				{ }, // Monday
				{ "open": 1200, "close": 1700}, // Tuesday
				{ "open": 1200, "close": 1700}, // Wednesday
				{ "open": 1200, "close": 1700}, // Thursday
				{ "open": 1200, "close": 1700}, // Friday
				{ "open": 1200, "close": 1700}  // Saturday
			]
		},
		// Study Abroad
		{
			"id": "studyAbroad",
			"hours":
			[
				{ }, // Sunday
				{ "open": 830, "close": 1700}, // Monday
				{ "open": 830, "close": 1700}, // Tuesday
				{ "open": 830, "close": 1700}, // Wednesday
				{ "open": 830, "close": 1700}, // Thursday
				{ "open": 830, "close": 1700}, // Friday
				{ }  // Saturday
			]
		},
		// Whole Foods
		{
			"id": "wholeFoods",
			"hours":
			[
				{ "open": 800, "close": 2200}, // Sunday
				{ "open": 800, "close": 2200}, // Monday
				{ "open": 800, "close": 2200}, // Tuesday
				{ "open": 800, "close": 2200}, // Wednesday
				{ "open": 800, "close": 2200}, // Thursday
				{ "open": 800, "close": 2200}, // Friday
				{ "open": 800, "close": 2200}  // Saturday
			]
		},
	];
}
