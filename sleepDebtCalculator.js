const getSleepHours = (day) => {
	switch (day) {
		case "monday":
			return 8;
			break;
		case "tuesday":
			return 7;
			break;
		case "wednesday":
			return 9;
			break;
		case "thursday":
			return 6;
			break;
		case "friday":
			return 5;
			break;
		case "saturday":
			return 6;
			break;
		case "sunday":
			return 8;
			break;
		default:
	}
};

// console.log(getSleepHours("friday"));

const getActualSleepHours = () => {
	const monday = getSleepHours("monday");
	const tuesday = getSleepHours("tuesday");
	const wednesday = getSleepHours("wednesday");
	const thursday = getSleepHours("thursday");
	const friday = getSleepHours("friday");
	const saturday = getSleepHours("saturday");
	const sunday = getSleepHours("sunday");

	return monday + tuesday + wednesday + thursday + friday + saturday + sunday;
};

// console.log(getActualSleepHours());

const getIdealSleepHours = () => {
	const idealHours = 8;
	return idealHours * 7;
};

// console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
	const actualSleepHours = getActualSleepHours();
	const idealSleepHours = getIdealSleepHours();

	if (actualSleepHours === idealSleepHours) {
		console.log("you got the perfect amount of sleep");
	} else if (actualSleepHours > idealSleepHours) {
		console.log(`over by ${actualSleepHours - idealSleepHours} hours`);
		console.log("you got more sleep than needed");
	} else if (actualSleepHours < idealSleepHours) {
		console.log(`under by ${idealSleepHours - actualSleepHours} hours`);
		console.log("you should get some rest");
	}
};

calculateSleepDebt();
