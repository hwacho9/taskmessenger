//import { fetchTasks } from "./tasks"
import { useEffect, useState } from "react";

import axios from 'axios';

//スプシの内容を反映
const apiURL = 'https://script.google.com/macros/s/AKfycbzzKlMepkunLhD-QVP5vhF6xUwNIXpRzUFq6n-zgKHFBT-viZ9YE8nZO07I8BdNhfyOmQ/exec';

const response = await fetch(apiURL); //URLを取り出す
const json = await response.json();
var prompt = "";
const tasks = [];
for (const item of json) {
    tasks.push({
        date: item.date,
        from: item.from_user,
        content: item.content,
    });
    prompt += '・'
    prompt += "date: "
    prompt += item.date;
    prompt += ", from: "
    prompt += item.from_user;
    prompt += ", content: "
    prompt += item.content;
    prompt += '\n';

}
//console.log(prompt);
const gptprompt = prompt;


const API_URL = 'https://api.openai.com/v1/';
const MODEL = 'gpt-3.5-turbo-preview';
const API_KEY = "エーピーアイキー";

export const Chat = async () => {
    console.log(gptprompt);
    try {
        const response = await axios.post(`${API_URL}chat/completions`, {
            // モデル ID の指定
            model: MODEL,
            // 質問内容
            messages: [
                {
                    'role': 'user',
                    'content': `
                    #指示#
                    ・以下のメッセージから以下の項目を抽出してください。
                    #条件#
                    ・一個だけでなくなるべく多くのタスクを抽出してください。
                    ・優先順位を順位付けしてください。
                    ・タスクをお願いした人の名前はメールアドレスの前の文字列にしてください。
                    ・期限がメッセージから判断できない場合は"不明"としてください。
                    #メッセージ#
                    ${gptprompt}
                    `,

                }
            ],
        }, {
            // 送信する HTTP ヘッダー(認証情報)
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        // 回答の取得
        console.log(response.data.choices[0].message.content);
        return response.data.choices[0].message.content;


    } catch (error) {
        console.error(error);
        return null;
    }
}
