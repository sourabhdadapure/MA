import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withNavigation } from 'react-navigation'
import { SearchBar } from 'react-native-elements'
import StockPrice from './StockPrice'
import { connect } from 'react-redux'
import { getStockPrice, getEarnings } from '../modules/stocks'

const Wrapper = styled.View`
	margin-vertical: 25;
	align-self: center;
	width: 90%;
`

const PriceText = styled.Text`
	font-size: 25;
`

class Search extends React.Component {
	static propTypes = {
		placeholderText: PropTypes.string,
	}

	static defaultProps = {
		placeholderText: 'Enter Text here',
	}

	constructor(props) {
		super(props)
	}

	state = {
		inputText: '',
	}

	updateSearch = inputText => {
		this.setState({ inputText })
		this.props.getStockPrice(this.state.inputText)
	}

	render() {
		const { placeholderText } = this.props
		const { inputText } = this.state

		return (
			<Wrapper>
				<SearchBar
					placeholder={placeholderText}
					onChangeText={this.updateSearch}
					value={inputText}
				/>

				<StockPrice
					onPress={() => {
						this.props.navigation.navigate('Earnings')
					}}
					stockPrice={this.props.stockPrice}
				/>
			</Wrapper>
		)
	}
}

const mapStateToProps = state => ({
	stockPrice: state.stocks.stockPrice,
	error: state.stocks.error,
})

export default connect(
	mapStateToProps,
	{ getStockPrice, getEarnings }
)(withNavigation(Search))
