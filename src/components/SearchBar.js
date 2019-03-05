import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { SearchBar } from 'react-native-elements'

const Wrapper = styled.View`
	align-self: center;
	width: 90%;
`

export default class Search extends React.Component {
	static propTypes = {
		placeholderText: PropTypes.string,
	}

	static defaultProps = {
		placeholderText: 'Enter Text here',
	}

	state = {
		inputText: '',
	}

	updateSearch = inputText => {
		this.setState({ inputText })
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
			</Wrapper>
		)
	}
}
