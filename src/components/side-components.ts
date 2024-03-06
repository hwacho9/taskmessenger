import { styled } from "styled-components";


export const Wrapper = styled.div`
    height: 100%;
    width: 250px;
    background-color: #f5f5f5;
    box-sizing: border-box;
`;

export const Side = styled.div`
    
    background: #ffffff;
    box-sizing: border-box;
    ${Wrapper}:hover & {
        background: #f0f0f0;
        cursor: pointer;
    }
`;
export const SidebarList = styled.ul`
    height: auto;
    padding: 0;
    width: 100%;
    & li {
        width: 100%;
        height: 60px;
        /* background-color: cadetblue; */
        /* border: 1px solid black; */
        display: flex;
        color: black;
        justify-content: center;
        align-items: center;
    }
`;