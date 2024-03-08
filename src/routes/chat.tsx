import { useEffect, useState } from "react";
import { auth, firestore } from "../firebase"; // Import your Firebase configuration
import { doc, collection } from "firebase/firestore"; // Import the necessary package
import styled from "styled-components";

export default function Chat() {
    const [msg, setMsg] = useState("");

    const users = [
        {
            uid: "1",
            name: "sam",
            is_online: true,
        },
        {
            uid: "2",
            name: "tom",
            is_online: false,
        },
        {
            uid: "3",
            name: "jerry",
            is_online: true,
        },
    ];

    const handleOnChange = (e) => {
        setMsg(e.target.value);
    };
    const handleSumbit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        console.log(msg);
        try {
            sendChat({
                message: msg,
                timestamp: Date.now(),
                uid: undefined,
            });
        } catch (error) {
            console.log(error);
        }
    };

    const Usermenu = styled.div`
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100px;
        margin: 20px;
        /* background-color: tomato; */
    `;
    const User = styled.div`
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        /* background-color: tomato; */
    `;

    const Userprofile = styled.div`
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: tomato;
        justify-content: center;
        align-items: center;
    `;

    const Chatlayout = styled.div`
        display: flex;
        background-color: whitesmoke;
        height: 600px;
    `;

    const Chatscreen = styled.div`
        background-color: #e4dbdb;
        width: 700px;
    `;
    return (
        <Chatscreen className="chat-container">
            <div className="chat-top">
                <h1>Conversations</h1>
            </div>
            <Chatlayout>
                <Usermenu>
                    <User>
                        {users.map((user) => (
                            <div key={user.uid}>
                                <Userprofile>{user.name}</Userprofile>
                                <div>
                                    {user.is_online ? "온라인" : "오프라인"}
                                </div>
                            </div>
                        ))}
                    </User>
                </Usermenu>

                <form onSubmit={handleSumbit}>
                    <input
                        placeholder="내용을 입력하세요."
                        value={msg}
                        onChange={handleOnChange}
                    />
                    <button type="submit">전송</button>
                </form>
            </Chatlayout>
            {/* <div className="chat-bottom">
                <form onSubmit={handleSumbit}>
                    <input
                        placeholder="내용을 입력하세요."
                        value={msg}
                        onChange={handleOnChange}
                    />
                    <button type="submit">전송</button>
                </form>
            </div> */}
        </Chatscreen>
    );
}
function sendChat(arg0: { message: string; timestamp: number; uid: any }) {
    throw new Error("Function not implemented.");
}
