import React from "react";
import { styled } from "styled-components";
import { SidebarData } from "./SidebarData"

const sidebar = styled.div`
    height: 100%;
    width: 250px;
    background-color: #f5f5f5;
`;

function Sidebar() {
    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                {SidebarData.map((value, key) => {
                    return (
                        <li>
                            <div>{value.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Sidebar;