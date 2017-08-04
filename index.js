
var getCommitHash = require('./lib').getCommitHash;

function Tracker (interval, onChange) {

  getCommitHash().then(hash => {
    this.currentHash = hash;
    this.track(interval);
  })

}

Tracker.prototype.track = function(interval) {
  setInterval(() => {
    getCommitHash().then(hash => {
      if (this.currentHash != hash) {
        console.log('changes were made!!!');
        this.currentHash = hash;
      } else {
        console.log('no changes made');
      }
    })
  }, interval);
}



var tracker = new Tracker(10000);
