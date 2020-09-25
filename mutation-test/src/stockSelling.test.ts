import { shouldSellStock } from "./stockSelling"


interface Stock{
	buy_price: number
	actual_price:number
	loss_notify: number
	stop_loss: number
	gain_notify: number
	should_sell_onGain: boolean
}

describe('return correct statement according to stock price volatility', () => {
	test('return ERROR if buy price is 0 or less', () =>{
		const stock: Stock = {
			buy_price: 0,
			actual_price: 1,
			loss_notify: 0.8,
			stop_loss: 0.6, 
			gain_notify: 1.40,
			should_sell_onGain: true
		}
		const ret = shouldSellStock(stock)
		expect(ret).toEqual('Invalid stock buy price')
		
	})
	
	test('return ERROR if actual price is 0 or less', () =>{
		const stock: Stock = {
			buy_price: 1,
			actual_price: 0,
			loss_notify: 0.8,
			stop_loss: 0.6, 
			gain_notify: 1.40,
			should_sell_onGain: true
		}
		const ret = shouldSellStock(stock)
		expect(ret).toEqual('Invalid stock actual price')
	
	})
	
	test('return ERROR if loss notify is greater  1', () =>{
		const stock: Stock = {
			buy_price: 1,
			actual_price: 1,
			loss_notify: 1.25,
			stop_loss: 0.6, 
			gain_notify: 1.40,
			should_sell_onGain: true
		}
		const ret = shouldSellStock(stock)
		expect(ret).toEqual('Invalid loss price to notify')
		
	})
	
	test('return ERROR if loss notify is 0 or less', () =>{
		const stock: Stock = {
			buy_price: 1,
			actual_price: 1,
			loss_notify: -0.2,
			stop_loss: 0.6, 
			gain_notify: 1.40,
			should_sell_onGain: true
		}
		const ret = shouldSellStock(stock)
		expect(ret).toEqual('Invalid loss price to notify')
		
	})
	
	test('return ERROR if stop loss is 0 or less', () =>{
		const stock: Stock = {
			buy_price: 1,
			actual_price: 1,
			loss_notify: 0.8,
			stop_loss: 0, 
			gain_notify: 1.40,
			should_sell_onGain: true
		}
		const ret = shouldSellStock(stock)
		expect(ret).toEqual('Invalid stop loss price')
		
	})
	
	test('return ERROR if stop loss is greater than loss notify', () =>{
		const stock: Stock = {
			buy_price: 1,
			actual_price: 1,
			loss_notify: 0.8,
			stop_loss: 0.9, 
			gain_notify: 1.40,
			should_sell_onGain: true
		}
		const ret = shouldSellStock(stock)
		expect(ret).toEqual('Invalid stop loss price')
		
	})
	
	test('return ERROR if gain notify is smaller than 1', () =>{
		const stock: Stock = {
			buy_price: 1,
			actual_price: 1,
			loss_notify: 0.8,
			stop_loss: 0.7, 
			gain_notify: 0.9,
			should_sell_onGain: true
		}
		const ret = shouldSellStock(stock)
		expect(ret).toEqual('Invalid gain notify price')
		
	})
	
	test('return nothing to do if valuation is between loss notify and gain notify', () =>{
		const stock: Stock = {
			buy_price: 20,
			actual_price: 20.5,
			loss_notify: 0.97,
			stop_loss: 0.95, 
			gain_notify: 1.1,
			should_sell_onGain: true
		}
		const ret = shouldSellStock(stock)
		expect(ret).toEqual('Volatility: 1.025, is in a acceptable range, nothing to be done')
		
    })
    
    

    
    


	
		
	
})