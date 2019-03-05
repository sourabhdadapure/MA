import React from 'react'
import styled from 'styled-components'

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

const EarningsText = styled.Text`
	text-align: center;
	font-size: 30;
	height: 50;
	color: white;
`

const EarningsSubText = styled.Text`
	font-size: 20;
	height: 50;
	color: white;
`

export default class EarningsCard extends React.Component {
	render() {
		const {
			actualEPS,
			consensusEPS,
			symbol,
			announceTime,
			numberOfEstimates,
			EPSSurpriseDollar,
			EPSReportDate,
			fiscalPeriod,
			fiscalEndDate,
			yearAgo,
			yearAgoChangePercent,
		} = this.props
		return (
			<Wrapper>
				<EarningsText>{symbol}</EarningsText>
				<EarningsSubText>Actual EPS:{actualEPS}</EarningsSubText>
				<EarningsSubText>Consensus EPS:{consensusEPS}</EarningsSubText>
				<EarningsSubText>Announce Time: {announceTime} </EarningsSubText>
				<EarningsSubText>
					Number Of Estimates{numberOfEstimates}
				</EarningsSubText>
				<EarningsSubText>
					EPS Surprise Dollar{EPSSurpriseDollar}
				</EarningsSubText>
				<EarningsSubText>EPS Report Date: {EPSReportDate}</EarningsSubText>
				<EarningsSubText>Fiscal Period:{fiscalPeriod}</EarningsSubText>
				<EarningsSubText>Fiscal End Date:{fiscalEndDate}</EarningsSubText>
				<EarningsSubText>Year Ago:{yearAgo}</EarningsSubText>
				<EarningsSubText>
					Year Ago Change Percent:{yearAgoChangePercent}
				</EarningsSubText>
			</Wrapper>
		)
	}
}
