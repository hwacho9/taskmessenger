import { Wrapper, Side, SidebarList } from "./side-components";
import { SidebarData } from "./SidebarData"


function Sidebar() {
    return (
        <Wrapper>
            <Side>
                <SidebarList>
                    {SidebarData.map((value, key) => {
                        return (
                            <li>
                                <div>{value.title}</div>
                            </li>
                        );
                    })}
                </SidebarList>
            </Side>
        </Wrapper>
    )
}

export default Sidebar;