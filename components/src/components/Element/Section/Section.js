// @flow
import React from 'react'
import Proptypes from 'prop-types'
import {BaseContainer} from '../BaseContainer'

export const Section = (props:Proptypes.node) => (
<BaseContainer as ="section"{...props}/>
)