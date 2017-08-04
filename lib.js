var exec = require('child_process').exec;

var execute = (command) => {
  return new Promise((resolve,reject) => {
    var child = exec(command, (err, stdout, stderr) => {
      if (err) return reject(err);
      resolve({
        stdout: stdout,
        stderr: stderr
      })
    });
  });
}

var getCommitHash = () => {
  return new Promise((resolve,reject) => {
    execute('git rev-parse HEAD')
      .then(res => {
        resolve(res.stdout.trim());
      })
      .catch(reject);
  });
}


module.exports.getCommitHash = getCommitHash;
