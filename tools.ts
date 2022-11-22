/**
 * Randomize an array.
 *
 * const randomizedNames = tools.randomize(names);
 *
 * (returns a new array that is randomized) 
 */
export const randomize = (arr: any[]) => {
	let currentIndex = arr.length;
	let temporaryValue = null;
	let randomIndex = null;

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = arr[currentIndex];
		arr[currentIndex] = arr[randomIndex];
		arr[randomIndex] = temporaryValue;
	}
	return arr;
} 