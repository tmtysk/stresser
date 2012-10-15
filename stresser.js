var async = require('async');
var argv = require('optimist')
    .usage('Usage: $0 -l [loop count] -c [concurrency] [program]')
    .demand(['l','c'])
    .argv;
var exec = require('child_process').exec;
var loop = argv.l;
var concurrency = argv.c;
var program = argv._;
var tasks = [];
for (var i = 0; i < concurrency * loop; i += 1) {
    tasks.push({name: "task" + i});
}
var q = async.queue(function (task, callback) {
    var child = exec(program,
                function (error, stdout, stderr) {
                    //console.log('stdout: ' + stdout);
                    //console.log('stderr: ' + stderr);
                    if (error !== null) {
                        //console.log('exec error: ' + error);
                    }
                }
                );
    callback();
}, concurrency);

q.push(tasks, function() {
    //console.log("processed!");
});
