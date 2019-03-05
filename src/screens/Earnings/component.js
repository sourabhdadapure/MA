import React from 'react'
import styled from 'styled-components'
import { Card } from 'react-native-elements'

import { connect } from 'react-redux'

const Wrapper = styled.View`
	flex: 1;
`

const EarningsText = styled.Text`
	text-align: center;
	font-size: 25;
`

const EarningsSubText = styled.Text`
	text-align: center;
	font-size: 20;
`

class EarningsComponent extends React.Component {
	render() {
		const { symbol } = this.props
		const { actualEPS, consensusEPS } = this.props.earnings
		return (
			<Wrapper>
				<Card>
					<EarningsText>{symbol}</EarningsText>
					<EarningsSubText>{actualEPS}</EarningsSubText>
					<EarningsSubText>{consensusEPS}</EarningsSubText>
				</Card>
			</Wrapper>
		)
	}
}
const mapStateToProps = state => ({
	earnings: state.stocks.earnings,
	symbol: state.stocks.symbol,
	error: state.stocks.error,
})

export default connect(mapStateToProps)(EarningsComponent)
