import { styled } from "styled-components";


export const Wrapper = styled.div`
    height: 100%;
    width: 250px;
    background-color: #f5f5f5;
    justify-content: left;
`;

export const Side = styled.div`
    
    background: #ffffff;
    box-sizing: border-box;
    
`;
export const SidebarList = styled.ul`
    height: auto;
    padding: 0;
    width: 100%;
    
    & li {
        width: 100%;
        height: 60px;
        display: flex;
        color: black;
        justify-content: center;
        align-items: center;
        ${Side}:hover & {
            background: #f0f0f0;
            cursor: pointer;
        }
    }
`;