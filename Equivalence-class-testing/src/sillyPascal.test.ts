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
})