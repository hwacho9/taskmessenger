import { styled } from "styled-components";

//サイドバーのコンポーネント
export const Wrapper = styled.div`
    height: 100%;
    background-color: #e4dbdb;
    width: 1000px;
`;

export default function Home() {
    return (
        <div>
            <Wrapper>
                <h1>Home</h1>
            </Wrapper>
            {/* <Sidebar /> */}
        </div>
    );
}
