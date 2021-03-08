import * as signalR from '@microsoft/signalr'
const postshubConnection = new signalR.HubConnectionBuilder()
    .withUrl("/posts")
    .configureLogging(signalR.LogLevel.Information)  
    .build();


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
export default postshubConnection;
