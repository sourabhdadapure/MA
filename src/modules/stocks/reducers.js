import types from './types'

export default function(state = {}, action) {
	switch (action.type) {
		case types.GET_STOCK_PRICE_SUCCESS: {
			return {
				...state,
				stockPrice: action.payload,
			}
		}

		case types.GET_STOCK_PRICE_ERROR: {
			return {
				...state,
				error: action.error,
			}
		}

		case types.GET_EARNINGS_SUCCESS: {
			return {
				...state,
				symbol: action.payload.symbol,
				earnings: action.payload.earnings[0],
			}
		}

		case types.GET_EARNINGS_ERROR: {
			return {
				...state,
				error: action.error,
			}
		}

		default:
			return state
	}
}
