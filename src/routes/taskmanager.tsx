import { fetchTasks } from "../components/tasks"
import { Chat } from "../components/Gpt-result"
import { useEffect, useState } from "react";


export default function Profile() {
    const [tasks, setTasks] = useState<any[]>([]); //anyがたに合わせるようにした
    const [gptResult, setGptResult] = useState<string>(""); // 新しい状態変数


    useEffect(() => {
        fetchTasks().then((data) => setTasks(data));
        Chat().then((result) => setGptResult(result));
    }, []);
    //内容をコピペ
    return (
        <div>
            <h1>taskmanager</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <div>{task.date}</div>
                        <div>From: {task.from}</div>
                        <div>Content: {task.content}</div>
                    </li>
                ))}
                {gptResult && (
                    <li>
                        <div>GPT-3による抽出結果</div>
                        <div>{gptResult}</div>
                    </li>
                )}
            </ul>
        </div>
    );
}
