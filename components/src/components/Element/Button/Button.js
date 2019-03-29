// @flow
import React from 'react'
import Proptypes from 'prop-types'
import {ButtonBase} from './ButtonBase'
import styled from 'styled-components'

const StyledButton = styled(ButtonBase)`
   ${props=>props.theme.variants.button[props.variant||'primary']};

`

export const Button = ( props:Proptypes.node) =>( 
    <StyledButton {...props}/>
)

Button.prototype={
    variant: Proptypes.string
}