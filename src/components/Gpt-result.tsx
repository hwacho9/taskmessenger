/*
import axios from 'axios';

const API_URL = 'https://api.openai.com/v1/';
const MODEL = 'gpt-4-1106-preview';
const API_KEY = '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';
*/

export const Chat = async () => {
    try {
        const response = `
        1. task: AR作品の開発要件のについて
        priority: 不明
        from: 2392677b
        due_date: 不明
        
        2. task: 7つの習慣を読んでください
        priority: 不明
        from: imakoh.app
        due_date: 不明
        
        3. task: 飲み会します
        priority: 不明
        from: 2392677b
        due_date: 不明
        
        4. task: カレーライスを作る
        priority: 不明
        from: imakoh.app
        due_date: 不明
        
        5. task: Pythonの機械学習について勉強してくださいね
        priority: 不明
        from: shokubota7280
        due_date: 不明
        
        6. task: 明日定期ミーティングです
        priority: 不明
        from: shokubota7280
        due_date: 明日
        
        7. task: React勉強会は今日です
        priority: 不明
        from: shokubota7280
        due_date: 今日
        `
        /*
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
                    ・Reac勉強します
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
        */
        // 回答の取得
        //return response.data.choices[0].message.content;
        return response;

    } catch (error) {
        console.error(error);
        return null;
    }
}
