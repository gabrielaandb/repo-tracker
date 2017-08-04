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

var getCommitHash = (url) => {
  return new Promise((resolve,reject) => {
    execute(`git ls-remote ${url} | head -1 | sed "s/HEAD//"`)
      .then(res => {
        var hash = res.stdout.trim();
        resolve(hash);
      })
      .catch(reject);
  });
}


module.exports.getCommitHash = getCommitHash;
