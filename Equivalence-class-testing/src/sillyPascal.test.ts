import { isValid } from './sillyPascal'

describe('Identifier validator', () => {
	test('return false if string does not starts with a letter', () =>{
		const ret = isValid('12345')
		expect(ret).toEqual(false)
	})

	test('return false if string contains invalid character', () => {
		const ret = isValid('ab*123')
		expect(ret).toEqual(false)
	})

	test('return false if string is empty', () => {
		const ret = isValid('')
		expect(ret).toEqual(false)
	})

	test('return false if string length is greather than 6', () => {
		const ret = isValid('abc12345')
		expect(ret).toEqual(false)
	})

	test('return false if string is null', () => {
		const ret = isValid(null!)
		expect(ret).toEqual(false)
	})

	test('return true of string is a valid identifier and len() = 1', () => {
		const ret = isValid('a')
		expect(ret).toEqual(true)
	})
		
	
})