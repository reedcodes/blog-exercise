// Add a filter to make date more readable. `dateData` is the data date, and
// `dateFormat` is the way we want to present it.

export default function(eleventyConfig) {
	eleventyConfig.addFilter('date', (dateData, dateFormat) => {
		const dateObj = new Date(dateData);

		// The year is the same regardless if the format is numeric or natural.
		// Expected output: 2025
		const year = dateObj.getUTCFullYear();

		// List all the months in a nice array. We'll use this is the date format
		// is natural.
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];

		// Check whether the date format is numeric or natural. We'll assume the
		// default is 'natural'.
		// Expected output: 1 or January
		const monthNumber = dateFormat == 'numeric' ? dateObj.getUTCMonth() + 1 : months[dateObj.getUTCMonth()];

		// If we are using a numeric date format, and the month is less than 10,
		// we need to add a leading 0.
		// Expected output: 01
		const month = dateFormat == 'numeric' && monthNumber < 10 ? `0${monthNumber}` : monthNumber;

		// If we are using a numeric date format, and the date is less than 10,
		// we need to add a leading 0.
		// Expected output: 01 or 1
		const date = dateFormat == 'numeric' && dateObj.getUTCDate() < 10 ? `0${dateObj.getUTCDate()}` : dateObj.getUTCDate()

		// Return the date in a readable format.
		// Expected output: 2025-01-01 or 1 January 2025
		return dateFormat == 'numeric' ? `${year}-${month}-${date}` : `${date} ${month} ${year}`;
	});

};
