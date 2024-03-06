import { styled } from "styled-components";
import { Side, SidebarList } from "./side-components";
import { SidebarData } from "./SidebarData"

const Wrapper = styled.div`
    height: 100%;
    width: 250px;
    background-color: #f5f5f5;
`;

function Sidebar() {
    return (
        <Wrapper>
            <Side>
                <ul className="SidebarList">
                    {SidebarData.map((value, key) => {
                        return (
                            <li>
                                <div>{value.title}</div>
                            </li>
                        );
                    })}
                </ul>
            </Side>
        </Wrapper>
    )
}

export default Sidebar;