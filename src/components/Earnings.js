import React from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import { getEarnings } from '../modules/stocks'

const Wrapper = styled.View`
	align-self: center;
	width: 90%;
`

class StockScreen extends React.Component {
	render() {
		return <Wrapper />
	}
}

const mapStateToProps = state => ({
	earnings: state.stocks.earnings,
	error: state.stocks.error,
})

export default connect(
	mapStateToProps,
	{ getEarnings }
)(StockScreen)
