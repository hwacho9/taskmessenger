import axios from 'axios';

const API_URL = 'https://api.openai.com/v1/';
const MODEL = 'gpt-3.5-turbo';
const API_KEY = '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';

export const Chat = async () => {
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
                    ・Python勉強
                    ・Reac勉強
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
        return response.data.choices[0].message.content;

    } catch (error) {
        console.error(error);
        return null;
    }
}
