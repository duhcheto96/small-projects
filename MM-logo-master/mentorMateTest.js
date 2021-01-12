function M(n) {
	let dashes = n;
	let stars = n;
	let result = "";

	upperSide = Math.ceil(n/2); // times upperside is printed
	// printing the upper side of the MM figure (which has somewhat a pattern)
	for (let i = 0; i < upperSide; i++) {
		result += ("-".repeat(dashes-i) + "*".repeat(stars + i * 2) + "-".repeat(dashes-i*2) +
			   "*".repeat(stars + i * 2) + "-".repeat(dashes-i)).repeat(2);
		result += "\n"; // starting new line
	}
	
	let middleSide = Math.floor(n/2); // the times the middle is printed
	// printing the middle side of the figure
	dashes = middleSide; // dashes equal the lines on which the middle side of the figure is printed
	stars = n * 2 - 1; // set the middle size of the stars, as the front and back stay equal to n
	for (let i = 0; i < middleSide; i++) {
		result += ("-".repeat(dashes-i) + "*".repeat(n) + "-".repeat(i * 2 + 1) + "*".repeat(stars - i * 2) +
			   "-".repeat(i * 2 + 1) + "*".repeat(n) + "-".repeat(dashes-i)).repeat(2);
		result += "\n";
	}

	// print the bottom side
	dashes = n; // reset value
	stars = n; // reset value
	result += ("*".repeat(dashes) + "-".repeat(stars) + "*".repeat(dashes) + "-".repeat(stars) +
		   "*".repeat(dashes)).repeat(2);
	
	console.log(result); // log the result
}

M(7);







