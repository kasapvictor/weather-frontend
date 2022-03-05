const getDate = (numberOfDay = 0) => {
	const config = {
		numberOfDay
	}
	
	switch (true) {
		case isNaN(Number(numberOfDay)):
			config.numberOfDay = 0;
			break;
		
		case numberOfDay < 0:
			config.numberOfDay  = 0;
			break;
			
		default:
			config.numberOfDay  = Math.abs(Math.floor(numberOfDay));
			break;
	}
	
	const today = new Date();
	const nextDay = new Date(today);
	const date = nextDay.setDate(nextDay.getDate() + config.numberOfDay);
	const newDate = new Date(date);
	
	return newDate.toLocaleDateString('RU', {
		year: '2-digit',
		month: '2-digit',
		day: '2-digit',
	});
};

export default getDate;
