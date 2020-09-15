import { calculaIR } from './imposto-de-renda'

describe('return valid tax amount acording to monthly income', () => {
	test('return 0$ if income is less than 1000$', () =>{
		const ret = calculaIR(900)
		expect(ret).toEqual(0)
    })
    
    test('return (income - 1000$) * (0.15) if income is greater than 1000$ and less or equal 2000$', () =>{
		const ret = calculaIR(1400)
		expect(ret).toEqual(60)
    })
    
    test('return (income - 1000$) * (0.15) if income is equal to 2000$', () =>{
		const ret = calculaIR(2000)
		expect(ret).toEqual(150)
    })

    test('return 150 + (income - 2000$) * (0.20) if income is greater than 2000$ and less than 3000$', () =>{
		const ret = calculaIR(2900)
		expect(ret).toEqual(330)
    })

    test('return (150 + (income - 2000$) * (0.20)) + ((income - 3000) * (0.05)) if income is greater than 2000$ and less than 3000$', () =>{
		const ret = calculaIR(6000)
		expect(ret).toEqual(1100)
    })

    
    


	
		
	
})