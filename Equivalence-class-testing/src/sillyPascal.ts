export function isValid (identifier: string): boolean {

	if(identifier == null) {
		return false
	}

	if (!/^[a-zA-Z]+$/.test(identifier.charAt(0)) || !/^[0-9a-zA-Z]+$/.test(identifier)) {
		return false
	}

	if (identifier.length < 1 || identifier.length > 6) {
		return false
	}

  	return true

}