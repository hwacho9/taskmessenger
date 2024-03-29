import { styled } from "styled-components";

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 420px;
    padding: 20px;
`;

export const Title = styled.h1`
    font-size: 42px;
`;

export const Form = styled.form`
    margin-top: 50px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
`;

export const Input = styled.input`
    padding: 10px 20px;
    border-radius: 50px;
    border: none;
    width: 100%;
    font-size: 16px;
    &[type="submit"] {
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
    }
`;

export const Error = styled.span`
    font-size: 16px;
    color: red;
`;

export const Switcher = styled.span`
    margin-top: 20px;
    a {
        color: #1d9bf0;
    }
`;