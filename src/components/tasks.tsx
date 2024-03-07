//スプシの内容を反映
const apiURL = 'https://script.google.com/macros/s/AKfycbzzKlMepkunLhD-QVP5vhF6xUwNIXpRzUFq6n-zgKHFBT-viZ9YE8nZO07I8BdNhfyOmQ/exec';

export const fetchTasks = async () => {
    const response = await fetch(apiURL); //URLを取り出す
    const json = await response.json();
    const tasks = [];
    for (const item of json) {
        tasks.push({
            date: item.date,
            from: item.from_user,
            content: item.content,
        });
    }
    return tasks;
};
