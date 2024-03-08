import { fetchTasks } from "../components/tasks"
import { Chat } from "../components/Gpt-result"
import { db } from '../firebase';
import { child, get, ref, set, getDatabase } from "firebase/database";


import { useEffect, useState } from "react";

//タスク抽出する関数
function process(text: string) {
    var tex1 = ""
    var tex2 = ""
    const todos = [];
    for (var i = 1; i < 7; i++) {
        tex1 = `${text.split(i.toString() + ".")[1]}`;
        tex2 = `${tex1.split((i + 1).toString() + ".")[0]}`;
        todos.push(tex2)
    }
    tex1 = `${text.split("7.")[1]}`;
    todos.push(tex1)
    const tasks = [];
    var todotask = "";
    var priority = "";
    var from = "";
    var due_date = "";
    for (const item of todos) {
        todotask = `${item.split("task: ")[1]}`;
        priority = `${item.split("priority: ")[1]}`;
        from = `${item.split("from: ")[1]}`;
        due_date = `${item.split("due_date: ")[1]}`;
        tasks.push({
            task: `${todotask.split("\n")[0]}`,
            priority: `${priority.split("\n")[0]}`,
            from: `${from.split("\n")[0]}`,
            due_date: `${due_date.split("\n")[0]}`,
        });
    }
    return tasks
}


export default function Profile() {
    const [tasks, setTasks] = useState<any[]>([]); //anyがたに合わせるようにした
    const [gptResult, setGptResult] = useState<string>(""); // 新しい状態変数


    useEffect(() => {
        fetchTasks().then((data) => setTasks(data));
        Chat().then((result) => setGptResult(result)); //GPT使うときに使用
    }, []);
    var Tex = process(gptResult);

    const dbRef = ref(getDatabase());
    get(child(dbRef, `users`))
        .then((snapshot) => {
            if (snapshot.exists()) {
                //console.log(snapshot.val());
            } else {
                console.log("No data available");
            }
        })
        .catch((error) => {
            console.error(error);
        });
    //データの格納
    for (const item of Tex) {
        set(ref(db, `/users/` + item.priority.toString() + "/"), {
            todotask: item.task,
            from: item.from,
            due_date: item.due_date,
        });
    }
    const TodoData = [];
    // データの読み込み
    for (var i = 1; i <= Tex.length; i++) {

        const readRef = ref(db, `/users/` + i.toString() + "/");
        console.log(i.toString());
        console.log(readRef);
        /*
        get(readRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    // データ取得成功時の処理

                    TodoData.push({
                        task: snapshot.val().todotask,
                        priority: i.toString(),
                        from: snapshot.val().from,
                        due_date: snapshot.val().due_date,
                    });
                    console.log(snapshot.val().priority); // Realtime Database の内容が出力されます
                } else {
                    console.log("No data available:", i.toString());
                }
            })
            .catch((error) => {
                console.error("読み込みエラー:", i.toString(), error);
            });
            */
    }

    //内容をコピペ
    return (
        <div>
            <h1>taskmanager</h1>
            <ul>
                <div>GPT-3による抽出結果</div>
                <table>
                    <thead>
                        <tr>
                            <th>タスク内容</th>
                            <th>優先順位</th>
                            <th>お願いした人</th>
                            <th>期日</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Tex.map((task) => (
                            <tr>
                                <td> {task.task} </td>
                                <td> {task.priority} </td>
                                <td> {task.from} </td>
                                <td> {task.due_date} </td>
                            </tr>


                        ))}
                    </tbody>
                </table>

            </ul>
        </div>
    );
}
