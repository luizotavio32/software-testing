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
    
    

    
    


	
		
	
})