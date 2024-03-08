import { Home, LogOut, User } from "lucide-react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { auth } from "../firebase";

const Wrapper = styled.div`
    display: flex;
    justify-content: left;
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
    margin-top: 30px;
`;

const Menu = styled.div`
    border: 2px solid black;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 2px solid #f0f0f0;
    height: 600px;
    width: 50px;
    &.log-out {
        bottom: 0px;
    }
`;

export default function Layout() {
    const navigate = useNavigate();

    const logOut = () => {
        auth.signOut();
        navigate("/login");
    };

    return (
        <Wrapper>
            <Menu>
                <Link to="/">
                    <MenuItem>
                        <Home />
                    </MenuItem>
                </Link>

                <Link to="/chat">
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
                    <div onClick={logOut}>
                        <LogOut color="red" />
                    </div>
                </MenuItem>
            </Menu>
            {/* <Sidebar /> */}
            <Outlet />
        </Wrapper>
    );
}
