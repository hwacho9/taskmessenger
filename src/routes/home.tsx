import { auth } from "../firebase";
import { styled } from "styled-components";
import Sidebar from "../components/sidebar";//サイドバーを挿入

//サイドバーのコンポーネント
export const Wrapper = styled.div`
    height: 100 %;
    width: 100%;
`;

import { useNavigate } from "react-router-dom";
export default function Home() {
    const navigate = useNavigate();

    const logOut = () => {
        auth.signOut();
        navigate("/login");
    };

    return (
        <div>
            <Wrapper>
                <h1>
                    <button onClick={logOut}>Logout</button>Home
                </h1>
            </Wrapper>
            <Sidebar />
        </div>

    );
}
