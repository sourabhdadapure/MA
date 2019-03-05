import types from './types'
import axios from 'axios'

export const getStockPrice = stockSymbol => {
	return dispatch => {
		dispatch({ type: types.GET_STOCK_PRICE_START })

		axios
			.get(`https://api.iextrading.com/1.0/stock/${stockSymbol}/price`)
			.then(responesData => {
				dispatch({
					type: types.GET_STOCK_PRICE_SUCCESS,
					payload: responesData.data,
				})
				dispatch(getEarnings(stockSymbol))
			})
			.catch(error => {
				dispatch({
					type: types.GET_STOCK_PRICE_ERROR,
					error,
				})
			})
	}
}

export const getEarnings = stockSymbol => {
	return dispatch => {
		axios
			.get(
				`https://cloud.iexapis.com/beta/stock/${stockSymbol}/earnings?token=pk_05cf6199536545af83009687f04c6088`
			)
			.then(responseData => {
				dispatch({
					type: types.GET_EARNINGS_SUCCESS,
					payload: responseData.data,
				})
			})
			.catch(error => {
				dispatch({
					type: types.GET_EARNINGS_ERROR,
					error,
				})
			})
	}
}
