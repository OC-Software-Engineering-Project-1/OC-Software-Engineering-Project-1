var io = require('socket.io')({
	transports: ['websocket'],
});

io.attach(52300);

io.on('connection', function(socket){
	socket.on('beep', function(){
		socket.emit('boop');
	});
	
	socket.on('MouseHeld', function(){
		socket.emit('clicky');
		console.log('test');
	});
})
