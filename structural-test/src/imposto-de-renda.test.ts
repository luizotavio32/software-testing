import { calculaIR } from './imposto-de-renda'

describe('return valid tax amount acording to monthly income', () => {
	test('return 0$ if income is less than 1000$', () =>{
		const ret = calculaIR(900)
		expect(ret).toEqual(0)
	})

	
		
	
})