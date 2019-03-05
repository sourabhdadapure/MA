import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const Wrapper = styled.TouchableOpacity`
	margin-top: 50;
	border-radius: 18;
	background-color: rgba(34, 43, 84, 0.9);
	margin-horizontal: 5%;
	align-items: center;
	padding-vertical: 30;
	justify-content: space-between;
	flex-direction: row;
	padding-horizontal: 5%;
`

const TextWrapper = styled.View`
	flex-direction: column;
`

const StockPriceText = styled.Text`
	text-align: center;
	font-size: 20;
	color: white;
`

export default class StockPrice extends React.Component {
	static propTypes = {
		onPress: PropTypes.func.isRequired,
		stockPrice: PropTypes.number,
	}

	static defaultProps = {
		stockPrice: 0,
	}

	render() {
		const { stockPrice, onPress } = this.props
		return (
			<Wrapper onPress={onPress}>
				<TextWrapper>
					<StockPriceText>Stock Price: {stockPrice}</StockPriceText>
				</TextWrapper>
			</Wrapper>
		)
	}
}
