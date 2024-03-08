import { styled } from "styled-components";

//サイドバーのコンポーネント
export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
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
