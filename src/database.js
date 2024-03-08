import database from "../firebase";

export function sendChat(data) {
    return database.ref("chats").push({
        message: data.message,
        timestamp: data.timestamp,
        uid: data.uid,
    });
}
