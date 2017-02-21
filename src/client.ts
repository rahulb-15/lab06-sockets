'use strict';

//make the client
const net = require('net'),
    readline = require('readline'),
    client = new net.Socket(),
    io = readline.createInterface(process.stdin, process.stdout);
    

client.on('data', function(data) { //when we get data
   console.log("Received data: " + data); 
});

client.on('close', function() { //when connection closed
    console.log("Server disconneted");
    console.log("Closing client");
    process.exit(0); 
});


var HOST = '127.0.0.1';
var PORT = 3000;

//connect to the server
client.connect(PORT, HOST, function() {
    console.log("Connected to: " + HOST + ":" + PORT);

    io.on('connection', function(line){
        switch(line.trim()){
            case 'exit': client.end();
            console.log('client disconneted');
            process.exit(0);
            break;
        }
        io.prompt();
    }

});




