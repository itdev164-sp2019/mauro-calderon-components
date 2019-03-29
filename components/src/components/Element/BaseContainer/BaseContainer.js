// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import {Flex, Box} from 'rebass';

export function BaseContainer ({
    children, 
    flex, 
    ...props}:{
        children:React.Node,
        flex: boolean,
        className: string,
        props: any
    }){
    if(flex){
        return(
            <Flex {...props} className={props.className}>
                {children}
            </Flex>
        )
    } else {
        return(
            <Box {...props} className={props.className}>
                {children}
            </Box>
        )
    }
}

BaseContainer.propTypes = {
    flex: PropTypes.bool,
    children:PropTypes.node.isRequired
}