var casper = require("casper").create();
var url = casper.cli.args[0];

casper.start(url, function(){
    this.echo('Hello, World! The Page title on '+ url +' is ' + this.getTitle());
});

casper.run(function() {
    this.echo('Everything in the stack has ended.').exit();
});
