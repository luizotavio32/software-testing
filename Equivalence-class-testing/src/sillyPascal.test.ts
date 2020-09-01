import { isValid } from './sillyPascal'

// Test cases created to cover equivalence classes:
// ("12345", false) - Starts with a letter
// ("a12^34", false) - Contains only letters or digits
// ("", false) - len(S) = 0
// ("a12345678", false) - len(S) > 6
// (null, false) - String is null
// ("a1234", true) - valid identifier

describe('Identifier validator', () => {
	test('return false if string does not starts with a letter', () =>{
		const ret = isValid('12345')
		expect(ret).toEqual(false)
	})

	test('return false if string contains invalid character', () => {
		const ret = isValid('ab*123')
		expect(ret).toEqual(false)
	})
})