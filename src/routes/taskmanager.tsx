import { fetchTasks } from "../components/tasks";
import { Chat } from "../components/Gpt-result";

import { useEffect, useState } from "react";
import { styled } from "styled-components";

//タスク抽出する関数
function process(text: string) {
    let tex1 = "";
    let tex2 = "";
    const todos = [];
    for (let i = 1; i < 7; i++) {
        tex1 = `${text.split(i.toString() + ".")[1]}`;
        tex2 = `${tex1.split((i + 1).toString() + ".")[0]}`;
        todos.push(tex2);
    }
    tex1 = `${text.split("7.")[1]}`;
    todos.push(tex1);
    const tasks = [];
    let todotask = "";
    let priority = "";
    let from = "";
    let due_date = "";
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

    //console.log(tasks);
    return tasks

}

const Wapper = styled.div`
    height: 100%;
    width: 940px;
    /* background-color: #e4dbdb; */
`;

export default function Profile() {
    const [tasks, setTasks] = useState<any[]>([]); //anyがたに合わせるようにした
    const [gptResult, setGptResult] = useState<string>(""); // 新しい状態変数

    useEffect(() => {
        fetchTasks().then((data) => setTasks(data));
        Chat().then((result) => setGptResult(result)); //GPT使うときに使用
    }, []);
<<<<<<< HEAD
    var Tex = process(gptResult);
    //console.log(Tex);
    //内容をコピペ
    return (
        <div>
            <h1>taskmanager</h1>
            <ul>
                <table>
                    <thead>
                        <tr>
                            <th>優先順位</th>
                            <th>タスク内容</th>
                            <th>お願いした人</th>
                            <th>期日</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Tex.map((task) => (
                            <tr>
                                <td> {task.priority} </td>
                                <td> {task.task} </td>
                                <td> {task.from} </td>
                                <td> {task.due_date} </td>
=======
    const Tex = process(gptResult);
    console.log(Tex);
    //内容をコピペ
    return (
        <div>
                                    <Wapper>
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
>>>>>>> 7ece50056243f40920f533bb63b11f26a14c216c
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
                                    </Wapper>
                                </div>
                                );
}
