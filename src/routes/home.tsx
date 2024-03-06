import { auth } from "../firebase";
import Sidebar from "../components/sidebar";//サイドバーを挿入
import { styled } from "styled-components";
//サイドバーのコンポーネント
export const Wrapper = styled.div`
    height: 100 %;
    width: 250px;
`;

import { useNavigate } from "react-router-dom";
export default function Home() {
    const navigate = useNavigate();

    const logOut = () => {
        auth.signOut();
        navigate("/login");
    };

    return (
        <Wrapper>
            <h1>
                <button onClick={logOut}>Logout</button>Home
            </h1>
            <div>
                <Sidebar />
            </div>
        </Wrapper>
    );
}
