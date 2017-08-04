
var getCommitHash = require('./lib').getCommitHash;

function Tracker (url, interval, onChange) {

  if (!(url && interval)) throw new Error('url and interval required');
  if (!onChange) onChange = () => { console.log('changes were made'); }

  this.url = url;
  this.onChange = onChange;

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
        this.onChange();
      } else {
        console.log('no changes made');
      }
    })
  }, interval);
}


module.exports = Tracker;
module.exports.execute = require('./lib').execute;
