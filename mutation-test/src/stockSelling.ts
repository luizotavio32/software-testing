

interface Stock{
	buy_price: number
	actual_price:number
	loss_notify: number
	stop_loss: number
	gain_notify: number
	should_sell_onGain: boolean
}

export function shouldSellStock (stock: Stock){

	if(stock.buy_price <= 0){
		return 'Invalid stock buy price'
	}

	if(stock.actual_price <= 0 ){
		return 'Invalid stock actual price'
	}

	if(stock.loss_notify <= 0 || stock.loss_notify >= 1){
		return 'Invalid loss price to notify'
	}

	if(stock.stop_loss <= 0 || stock.stop_loss >= stock.loss_notify){
		return 'Invalid stop loss price'
	}

	if(stock.gain_notify < 1){
		return 'Invalid gain notify price'
	}

	const volatility = stock.actual_price/stock.buy_price

	if (volatility > stock.loss_notify && volatility < stock.gain_notify) {
		return 'Volatility: ' + volatility + ', is in a acceptable range, nothing to be done'
	}

	if(volatility > stock.stop_loss && volatility <= stock.loss_notify) {
		return 'Volatility: ' + volatility + ', is in an attention zone do you want to sell?'
	}

	if(volatility <= stock.stop_loss){
		return 'Volatility: ' + volatility + ', is bellow or equal you stop loss, selling now'
	}

	if(volatility >= stock.gain_notify){
		if(stock.should_sell_onGain) {
			return 'Volatility: ' + volatility + ', is above you gain margin, selling now as intended'
		} else {
			return 'Volatility: ' + volatility + ', is above you gain margin, do you want to sell?'
		}
	}

	



  
}
