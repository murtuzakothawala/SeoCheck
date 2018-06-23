const {Transform} = require('stream');
// var inherits = require('inherits');
var counter = 1;

class Transformer extends Transform{
    constructor(options) {
        super(options)
    }

    _final(data, cb) {
        console.log("in the final");
        console.log(data);
    }

    _flush(cb) {
        console.log("flush");
        cb();
    }

    _transform(chunk, encoding, cb) {
        counter++;
        console.log(chunk.toString());
        console.log("=================================================In transform============", counter ,"-------------------------", encoding);
        
        cb();
    }
}

// class ReadData {

//     constructor() {

//     }

// }

// module.exports = require('./lib/rule');
// //  Object.assign(
// //     {},
// //     require('./lib/rule'),    
// // );
var exports = module.exports;

exports.Rule = require('./lib/rule');
exports.Writer = require('./lib/writer');
exports.Reader = require('./lib/reader');
