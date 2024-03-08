export default function Chat() {
    return (
        <div className="chat-container">
            <div className="chat-top">헤더</div>
            <div className="chat-middle">
                <li className="chat-bubble send">
                    <p>하이룽~하이룽~하이룽~하이룽~하이룽~</p>
                    <span>13:30PM</span>
                </li>
                <li className="chat-bubble receive">
                    <p>방가방가!!</p>
                    <span>13:31PM</span>
                </li>
            </div>
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
        </div>
    );
}
