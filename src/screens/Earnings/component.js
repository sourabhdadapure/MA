import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { EarningsCard } from '../../components'

class EarningsComponent extends React.Component {
	static propTypes = {
		earnings: PropTypes.object.isRequired,
		symbol: PropTypes.string.isRequired,
	}

	render() {
		const { symbol, earnings } = this.props

		return (
			<EarningsCard
				symbol={symbol}
				actualEPS={earnings.actualEPS}
				consensusEPS={earnings.consensusEPS}
				announceTime={earnings.announceTime}
				numberOfEstimates={earnings.numberOfEstimates}
				EPSSurpriseDollar={earnings.EPSSurpriseDollar}
				EPSReportDate={earnings.EPSReportDate}
				fiscalPeriod={earnings.fiscalPeriod}
				fiscalEndDate={earnings.fiscalEndDate}
				yearAgo={earnings.yearAgo}
				yearAgoChangePercent={earnings.yearAgoChangePercent}
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
