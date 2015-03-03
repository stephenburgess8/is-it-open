window.onload = function() {
	var date = new Date();
	// Note: getMonth returns 0-11
	var month = date.getMonth();
	// Note: getDate returns 1-31
	var dateOfMonth = date.getDate();

	// Corrects for Daylight savings
	if (month <= 2 || month >= 10) {
		if ((month == 2 && dateOfMonth < 8) || (month != 2)) {
			date.setUTCHours(date.getUTCHours()-5);
		}
	} else {
		date.setUTCHours(date.getUTCHours()-4);
	}

	// Note: Sunday is 0, Monday is 1, and so on.
	var day = date.getUTCDay();
	// note: getHours returns 0-23
	var hour = date.getUTCHours();
	var minutes = date.getUTCMinutes();
	console.log(hour);

	// MORE Store

	var moreStoreOpen = false;

	if (day > 0 && day < 6) {
		if (hour > 7) {
			moreStoreOpen = true;
		}
	} else {
		if (hour < 1 || hour > 10) {
			moreStoreOpen = true;
		}
	} 
	var open = document.getElementById("moreStoreOpen");
	var closed = document.getElementById("moreStoreClosed");

	if (moreStoreOpen) {
		open.style.display = "block";
		closed.style.display = "none";
	} else {
		open.style.display = "none";
		closed.style.display = "block";
	}


	// MORE Card Office

	var moreCardOpen = false;


	if (day > 0 && day < 6) {
		if ( ( hour > 8 && hour < 17 ) || ( hour == 8 && minutes > 29 ) ) {
			moreCardOpen = true;
		}
	}

	open = document.getElementById("moreCardOpen");
	closed = document.getElementById("moreCardClosed");

	if (moreCardOpen) {
		open.style.display = "block";
		closed.style.display = "none";
	} else {
		open.style.display = "none";
		closed.style.display = "block";
	}


	// Starbucks

	var starbucksOpen = false;

	if (day > 0 && day < 6) {
		if ( ( hour > 7 && hour < 23 ) || ( hour == 7 && minutes > 29 ) ){
			starbucksOpen = true;
		}
	} else {
		if ( hour >= 10 && hour < 23) {
			starbucksOpen = true;
		}
	}

	open = document.getElementById("starbucksOpen");
	closed = document.getElementById("starbucksClosed");

	if (starbucksOpen) {
		open.style.display = "block";
		closed.style.display = "none";
	} else {
		open.style.display = "none";
		closed.style.display = "block";
	}

	// Parking

	var parkingOpen = false;

	if (day > 0 && day < 6) {
		if ( ( hour > 8 && hour < 17 ) || ( hour == 8 && minutes > 29 ) ) {
			parkingOpen = true;
		}
	}

	open = document.getElementById("parkingOpen");
	closed = document.getElementById("parkingClosed");

	if (parkingOpen) {
		open.style.display = "block";
		closed.style.display = "none";
	} else {
		open.style.display = "none";
		closed.style.display = "block";
	}


	// CTS

	var ctsOpen = false;

	if (day > 0 && day < 5) {
		if ( ( hour >= 8 && hour < 19 ) || ( hour == 19 && minutes < 45 ) ) {
			ctsOpen = true;
		}
	} else if (day == 5) {
		if ( ( hour >= 8 && hour < 17) || ( hour == 17 && minutes < 45 ) ) {
			ctsOpen = true;
		}
	}

	open = document.getElementById("ctsOpen");
	closed = document.getElementById("ctsClosed");

	if (ctsOpen) {
		open.style.display = "block";
		closed.style.display = "none";
	} else {
		open.style.display = "none";
		closed.style.display = "block";
	}


	// Counseling

	var counselingOpen = false;

		if (day > 0 && day < 6) {
		if ( ( hour > 8 && hour < 17 ) || ( hour == 8 && minutes > 29 ) ) {
			counselingOpen = true;
		}
	}

	open = document.getElementById("counselingOpen");
	closed = document.getElementById("counselingClosed");

	if (counselingOpen) {
		open.style.display = "block";
		closed.style.display = "none";
	} else {
		open.style.display = "none";
		closed.style.display = "block";
	}


	// Registrar

	var registrarOpen = false;

		if (day > 0 && day < 6) {
		if ( hour >= 9 && hour < 17 ) {
			registrarOpen = true;
		}
	}

	open = document.getElementById("registrarOpen");
	closed = document.getElementById("registrarClosed");

	if (registrarOpen) {
		open.style.display = "block";
		closed.style.display = "none";
	} else {
		open.style.display = "none";
		closed.style.display = "block";
	}


	// Advising

	var advisingOpen = false;

		if (day > 0 && day < 6) {
		if ( ( hour > 8 && hour < 17 ) || ( hour == 8 && minutes > 29 ) ) {
			advisingOpen = true;
		}
	}

	open = document.getElementById("advisingOpen");
	closed = document.getElementById("advisingClosed");

	if (advisingOpen) {
		open.style.display = "block";
		closed.style.display = "none";
	} else {
		open.style.display = "none";
		closed.style.display = "block";
	}


	// Career Development

	var cdcOpen = false;

	if (day == 1 || day == 2 || day == 4) {
		if ( ( hour > 8 && hour < 17 ) || ( hour == 8 && minutes > 29 ) ) {
			cdcOpen = true;
		}
	} else if (day == 3) {
		if ( ( hour > 8 && hour < 18 ) || ( hour == 8 && minutes > 29 ) || ( hour == 18 && minutes < 31 ) ) {
			cdcOpen = true;
		}
	} else if (day == 5) {
		if ( hour > 8 && hour < 16 ) {
			cdcOpen = true;
		}
	}

	open = document.getElementById("cdcOpen");
	closed = document.getElementById("cdcClosed");

	if (cdcOpen) {
		open.style.display = "block";
		closed.style.display = "none";
	} else {
		open.style.display = "none";
		closed.style.display = "block";
	}


	// Learning Center

	var learningOpen = false;

		if (day > 0 && day < 6) {
		if ( hour >= 10 && hour < 17 ) {
			learningOpen = true;
		}
	}

	open = document.getElementById("learningOpen");
	closed = document.getElementById("learningClosed");

	if (learningOpen) {
		open.style.display = "block";
		closed.style.display = "none";
	} else {
		open.style.display = "none";
		closed.style.display = "block";
	}


	// Neuberger

	var neubergerOpen = false;

	if ( day != 1 ) {
		if ( hour >= 12 && hour < 17 ) {
			neubergerOpen = true;
		}
	}

	open = document.getElementById("neubergerOpen");
	closed = document.getElementById("neubergerClosed");

	if (neubergerOpen) {
		open.style.display = "block";
		closed.style.display = "none";
	} else {
		open.style.display = "none";
		closed.style.display = "block";
	}


	// Study Abroad

	var studyAbroadOpen = false;

		if (day > 0 && day < 6) {
		if ( ( hour > 8 && hour < 17 ) || ( hour == 8 && minutes > 29 ) ) {
			studyAbroadOpen = true;
		}
	}

	open = document.getElementById("studyAbroadOpen");
	closed = document.getElementById("studyAbroadClosed");

	if (studyAbroadOpen) {
		open.style.display = "block";
		closed.style.display = "none";
	} else {
		open.style.display = "none";
		closed.style.display = "block";
	}
}