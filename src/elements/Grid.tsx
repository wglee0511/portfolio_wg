import React from 'react'
import styled from 'styled-components';


interface FlexOption {
    direction?: string,
    just_con?: string,
    align_item?: string 
}
interface Props {
    width: string,
    height: string,
    children: React.ReactNode,
    _onClick : () => void,
    is_flex : FlexOption
}

type WrapperType ={
    width : string,
    height: string,
    is_flex : FlexOption
}

const Grid = (props: Props) => {
    const {children, _onClick, ...rest} = props;

    return (
        <Wrapper onClick={_onClick} {...rest} >
           {children} 
        </Wrapper>
    )
}

Grid.defaultProps = {
    width: "100%",
    height: "100%",
    children : null,
    _onClick : () => {},
    is_flex : null,
}

const Wrapper = styled.div<WrapperType>`
    width : ${props => props.width};
    height: ${props => props.height};
    ${props => {
        if (props.is_flex !== null) {
            return `
                display: flex;
                flex-direction: ${props.is_flex.direction};
                justify-content : ${props.is_flex.just_con};
                align-items: ${props.is_flex.align_item};
            `
        }
    }}
`;

export default Grid
