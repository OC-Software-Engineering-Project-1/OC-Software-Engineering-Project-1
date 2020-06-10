

const GameServer = require('../../models/gameServer')
const fs = require('fs');
const path = require('path')

const SETTINGSPATH = path.join(__dirname,'settings.json')
function start(port) {
  
  const { exec } = require("child_process");
  const PATH = "../../game_server/server/NodeServer-Kitsugi/index.js";
  exec("node " + PATH + " " + port, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

//https://www.npmjs.com/package/app-settings
function allocatePort() {

  var min = 60000;
  const max = 60025;
  var randPort =  Math.floor(Math.random() * (max - min)) + min;
 const rawData = fs.readFileSync(SETTINGSPATH)
  let portsInUse = JSON.parse(rawData).portsInUse;
  console.log(portsInUse)
  if (portsInUse.length >= max - min) {
    console.log("All ports are being used")
    throw new Error("All ports are being used");
    return
  }
  while (portsInUse.includes(randPort)) {
    randPort = Math.floor(Math.random() * (max - min)) + min;
  }

  portsInUse.push(randPort)
  let data = JSON.stringify({
    "portsInUse": portsInUse
  });
  fs.writeFileSync(SETTINGSPATH, data)
  return randPort;


}

function deallocatePorts(port) {
  const rawData = fs.readFileSync(SETTINGSPATH)
  let portsInUse = JSON.parse(rawData).portsInUse;
  let index = portsInUse.indexOf(port);
  console.log(index)
  if(index ==-1){
    console.log("Port does not exist!")
    return
  }
  portsInUse.splice(index);
  let data = JSON.stringify({
    "portsInUse": portsInUse
  });
  fs.writeFileSync(SETTINGSPATH, data)
  console.log("ports", portsInUse)

}

//let port = allocatePort();
//console.log(port)
//console.log(__dirname)
//deallocatePorts(60012)

module.exports.allocatePort = allocatePort;
module.exports.start = start;