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
    is_flex : FlexOption,
    cursor: boolean,
    margin : string,
    padding: string,
    bg: string,
    color: string,
    hover: boolean,
    hover_color: string,
    hover_bg: string
}
type WrapperType ={
    width : string,
    height: string,
    is_flex : FlexOption,
    cursor: boolean,
    margin: string,
    padding: string,
    bg:string,
    color: string,
    hover: boolean,
    hover_color: string,
    hover_bg : string
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
    cursor: false,
    margin: "",
    padding: "",
    bg: "white",
    color: "black",
    hover: false,
    hover_color: "black",
    hover_bg: "white"
}

const Wrapper = styled.div<WrapperType>`
    width : ${props => props.width};
    height: ${props => props.height};
    margin : ${props => props.margin};
    background-color: ${props => props.bg};
    color: ${props => props.color};
    ${props => props.hover && `
        :hover {
            cursor: pointer;
            color: ${props.hover_color};
            background-color : ${props.hover_bg};
        }

    `}
    ${props => props.cursor && "cursor : pointer"};
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
