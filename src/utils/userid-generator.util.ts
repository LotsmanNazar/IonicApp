export const generateUserID = (username: string): string => {
	const value = window.performance.now() + username;
	const textEncoder = new TextEncoder();
	const encodedValue = textEncoder.encode(value);
	const userID = btoa(String.fromCharCode(...encodedValue));

	return userID;
}