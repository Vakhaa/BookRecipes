import * as signalR from '@microsoft/signalr'
const chathubConnection = new signalR.HubConnectionBuilder()
    .withUrl("/chat")
    .configureLogging(signalR.LogLevel.Information)  
    .build();

const chathub = {
    hub() {
        return chathubConnection ;
    },
    start() {
        // Starts the SignalR connection
        chathubConnection .start();
    },
    sendConnectionId(){
        if (chathubConnection.connectionId) {
            chathubConnection.invoke("sendConnectionId", chathubConnection.connectionId);
        }
    },
    send(data) {
        if (chathubConnection.connectionId) {
            chathubConnection.invoke("Send", data);
        }
    },
}

/*hubConnection.on("Send", function (data) {
    debugger
    console.log(data);
});*/

/*document.getElementById("sendBtn").addEventListener("click", function (e) {
    *//*let message = document.getElementById("message").value;*//*
    hubConnection.invoke("Send", message);
});*/

//export default chathub;
/*hubConnection.start();*/
export default chathubConnection;
