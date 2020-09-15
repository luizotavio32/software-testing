import { calculaIR } from './imposto-de-renda'

describe('return valid tax amount acording to monthly income', () => {
	test('return 0$ if income is less than 1000$', () =>{
		const ret = calculaIR(900)
		expect(ret).toEqual(0)
    })
    
    test('return (income - 1000$) * (0.15) if income is more than 1000$ and less or equal 2000$', () =>{
		const ret = calculaIR(1400)
		expect(ret).toEqual(60)
    })
    
    test('return (income - 1000$) * (0.15) if income is equal to 2000$', () =>{
		const ret = calculaIR(2000)
		expect(ret).toEqual(150)
	})

	
		
	
})