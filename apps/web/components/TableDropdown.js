import { Dropdown } from 'semantic-ui-react'
import styled from 'styled-components'

import FeatherIcon from 'feather-icons-react';

import 'semantic-ui-css/semantic.min.css'

const StyledContainer = styled.div`
	.style-menu {
		border-radius: 16px !important;
		overflow: hidden;
	}
`

export const TableDropdown = ({options}) => (
	<StyledContainer>
		<Dropdown text='Acties'>
			<Dropdown.Menu direction='left' className='style-menu'>
				{options.map(({icon, text, onClick, disabled}, i) => (
					<Dropdown.Item key={i} onClick={onClick} disabled={disabled} content={
						<div className='flex justify-between'>
							<p>{text}</p>
							{icon && <FeatherIcon name={icon} size={16} className='ml-4'/>}
						</div>
					}/>
				))}
			</Dropdown.Menu>
		</Dropdown>
	</StyledContainer>
)