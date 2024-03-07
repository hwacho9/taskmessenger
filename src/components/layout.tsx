import { Home, LogOut, User } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import { styled } from "styled-components";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    height: 100%;
    gap: 20px;
    padding: 50px 0px;
    width: 100%;
    max-width: 860px;
`;

const MenuItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Menu = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #f0f0f0;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    &log-out {
        border-color: red;
    }
`;
export default function Layout() {
    return (
        <Wrapper>
            <Menu>
                <Link to="/">
                    <MenuItem>
                        <Home />
                    </MenuItem>
                </Link>

                <Link to="/profile">
                    <MenuItem>
                        <User />
                    </MenuItem>
                </Link>

                <MenuItem className="log-out">
                    <LogOut />
                </MenuItem>
            </Menu>
            {/* <Sidebar /> */}
            <Outlet />
        </Wrapper>
    );
}
