import React from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import { EarningsCard } from '../../components'

const Wrapper = styled.View`
	margin-top: 30;
	background-color: rgba(34, 43, 84, 0.9);
	margin-horizontal: 5%;
	align-items: center;
	padding-vertical: 30;
	justify-content: space-between;
	flex-direction: column;
	padding-horizontal: 5%;
`

class EarningsComponent extends React.Component {
	render() {
		const { symbol } = this.props
		const {
			actualEPS,
			consensusEPS,
			announceTime,
			numberOfEstimates,
			EPSSurpriseDollar,
			EPSReportDate,
			fiscalPeriod,
			fiscalEndDate,
			yearAgo,
			yearAgoChangePercent,
		} = this.props.earnings
		return (
			<EarningsCard
				symbol={symbol}
				actualEPS={actualEPS}
				consensusEPS={consensusEPS}
				announceTime={announceTime}
				numberOfEstimates={numberOfEstimates}
				EPSSurpriseDollar={EPSSurpriseDollar}
				EPSReportDate={EPSReportDate}
				fiscalPeriod={fiscalPeriod}
				fiscalEndDate={fiscalEndDate}
				yearAgo={yearAgo}
				yearAgoChangePercent={yearAgoChangePercent}
			/>
		)
	}
}
const mapStateToProps = state => ({
	earnings: state.stocks.earnings,
	symbol: state.stocks.symbol,
	error: state.stocks.error,
})

export default connect(mapStateToProps)(EarningsComponent)
