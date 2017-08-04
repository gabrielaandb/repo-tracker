
var getCommitHash = require('./lib').getCommitHash;

function Tracker (url, interval, onChange) {

  this.url = url;

  getCommitHash(url).then(hash => {
    console.log(hash);
    this.currentHash = hash;
    this.track(interval);
  })

}

Tracker.prototype.track = function(interval) {
  setInterval(() => {
    getCommitHash(this.url).then(hash => {
      if (this.currentHash != hash) {
        console.log('changes were made!!!');
        console.log(hash);
        this.currentHash = hash;
      } else {
        console.log('no changes made');
      }
    })
  }, interval);
}



var tracker = new Tracker('https://github.com/gabrielaandb/repo-tracker', 10000);
