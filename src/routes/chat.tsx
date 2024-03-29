import { useState } from "react";
import styled from "styled-components";
import firebase from "firebase/app"; // Import the firebase package
import { MessageCircle } from "lucide-react";

export default function Chat() {
    const [msg, setMsg] = useState("");

    const users = [
        {
            uid: "1",
            name: "sam",
            is_online: true,
            task_ing: "DB作業中",
        },
        {
            uid: "2",
            name: "tom",
            is_online: "false",
            task_ing: "フロントエンド作業中",
        },
        {
            uid: "3",
            name: "jerry",
            is_online: true,
            task_ing: "プレゼンの資料作成中",
        },
    ];

    const Usermenu = styled.div`
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 300px;
        margin: 20px;
        /* background-color: tomato; */
    `;
    const User = styled.div`
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 200px;
        padding: 20px;
        height: 600px;
        &:hover {
            cursor: pointer;
        }
    `;

    const Userprofile = styled.div`
        border-bottom: 2px solid #f0f0f0;
        display: flex;
        gap: 10px;
        align-items: center;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin-bottom: 30px;
    `;

    const Chatlayout = styled.div`
        display: flex;
        background-color: whitesmoke;
        height: 600px;
    `;

    const Chatscreen = styled.div`
        background-color: #e4dbdb;
        width: 1000px;
    `;

    const Conversation = styled.div`
        display: flex;
        width: 600px;
        justify-content: center;
        align-items: center;
    `;

    const New = styled.div`
        display: flex;
        width: 20px;
        padding: 253px 299px 253px 300px;
        justify-content: center;
        align-items: center;
        align-self: stretch;
        flex-direction: column;
    `;

    const Button = styled.div`
        display: flex;
        width: 180px;
        height: 44px;
        padding: 15px 15px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 12px;
        background: var(--Primary, #5570f1);
        &:hover {
            cursor: pointer;
        }
    `;

    const Text = styled.div`
        display: flex;
        flex-direction: column;
        width: 300px;
        justify-content: center;
        align-items: center;
    `;

    const Div = styled.div`
        color: green;
    `;

    const Task = styled.div`
        color: blue;
        margin-top: -20px;
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
                                <Userprofile>
                                    <img
                                        src="https://www.w3schools.com/howto/img_avatar.png"
                                        alt="Avatar"
                                        style={{
                                            width: "100%",
                                            borderRadius: "50%",
                                        }}
                                    />
                                    <div>{user.name}</div>
                                    <Div>
                                        {user.is_online ? "online" : "offline"}
                                    </Div>
                                </Userprofile>
                                <Task>
                                    <div>{user.task_ing}</div>
                                </Task>
                            </div>
                        ))}
                    </User>
                </Usermenu>

                {/* <form onSubmit={handleSumbit}>
                    <input
                        placeholder="내용을 입력하세요."
                        value={msg}
                        onChange={handleOnChange}
                    />
                    <button type="submit">전송</button>
                </form> */}
                <Conversation>
                    <New>
                        <div>
                            <MessageCircle color="black" size={60} />
                        </div>
                        <Text>
                            <h3>Message</h3>
                            <p>Click on a contact to view messages.</p>
                        </Text>
                        <Button>hi</Button>
                    </New>
                </Conversation>
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
