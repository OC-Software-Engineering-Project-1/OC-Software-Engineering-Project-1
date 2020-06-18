 function run(port) {
  const { exec } = require("child_process");
  
  exec("node index.js " + port, (error, stdout, stderr) => {
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

//to run this function on port 1234
//run(1234);
module.exports.run = run;