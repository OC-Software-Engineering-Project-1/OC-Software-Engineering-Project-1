'use strict';
var debug = require('debug');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

var userRouter = require('./routes/user/user');
var scoreRouter=require('./routes/score/score');
var gameRouter=require('./routes/game/game');
var gameSessionRoutes=require('./routes/gameSession/gameSession');
var friendRequestRoutes=require('./routes/friendRequest/friendRequest');
var groupRoutes=require('./routes/group/group');
var gameServerRoutes=require('./routes/gameServer/gameServer');

var GameServer = require('./models/gameServer')

const SETTINGSPATH = path.join(__dirname,'routes','gameServer','settings.json')
const fs = require('fs')

require('./db/mongoose'); //Get db Connection

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//Handling CORS
app.use(cors());


// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//Don't change the followeing two lines
app.use('/static',express.static(path.join(__dirname, 'public')));//used in getting user profile picture
app.use('/EmptyGame', express.static(path.join(__dirname, 'game_server/games/EmptyGame')));
app.use('/Kintsugi', express.static(path.join(__dirname, 'game_server/games/Kintsugi')));
app.use('/Cryptogram', express.static(path.join(__dirname, 'game_server/games/Cryptogram')));
app.use(userRouter);
app.use(scoreRouter);
app.use(gameRouter);
app.use(gameSessionRoutes);
app.use(friendRequestRoutes);
app.use(groupRoutes);
app.use(gameServerRoutes);






// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});




app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});
//handle exit to free up ports and db
process.stdin.resume();

const exitHandler = async ()=>{
    //make sure to clean up
    // console.log("Free up ports!!!")
    let data = JSON.stringify({
        portsInUse: [],
      });
      fs.writeFileSync(SETTINGSPATH, data);
      await GameServer.deleteMany({})   //Empty gameserver Table
      
      process.exit();

}
//https://stackoverflow.com/questions/14031763/doing-a-cleanup-action-just-before-node-js-exits
process.on('exit',exitHandler);
process.on('SIGUSR1', exitHandler);
process.on('SIGUSR2',exitHandler);
process.on('SIGINT',exitHandler);
process.on('uncaughtException',exitHandler);