import React from 'react'
import styled from 'styled-components'

import { SearchBar } from '../../components'

const Wrapper = styled.View`
	flex: 1;
`

const SplashComponent = () => (
	<Wrapper>
		<SearchBar placeholderText="Enter a stock symbol.." />
	</Wrapper>
)

export default SplashComponent
