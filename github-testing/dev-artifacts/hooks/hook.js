module.exports = {
   bootstrap: function(done) {
    console.log('Do some pretty suite setup stuff');
    done();
  },

  teardown: function(done) {
    console.log('Cool, one of the test suites have finished');
    done();
  }
}