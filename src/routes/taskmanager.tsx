//スプシの内容を反映
const apiURL = 'https://script.google.com/macros/s/AKfycbzzKlMepkunLhD-QVP5vhF6xUwNIXpRzUFq6n-zgKHFBT-viZ9YE8nZO07I8BdNhfyOmQ/exec';
const data = fetch(apiURL)
    .then(function (fetch_data) {
        return fetch_data.json();
    })
    .then(function (json) {
        for (var i in json) {
            console.log(json[i].date);
        }
    });

export default function Profile() {
    const response = fetch(apiURL);
    console.log(response)
    return (<div>
        <h1>taskmanager</h1>
    </div>);
}