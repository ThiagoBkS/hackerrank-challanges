function regexVar() {
	/*
	 * Declare a RegExp object variable named 're'
	 * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
	 * followed by one or more letters.
	 */

	/*
	 * Do not remove the return statement
	 */
	return new RegExp("^(Mr|Mrs|Ms|Dr|Er)\\.[a-zA-Z]+$");
}
