var fs = require('fs')
var parseMidi = require('midi-file').parseMidi
var writeMidi = require('midi-file').writeMidi

// Read MIDI file into a buffer
var input = fs.readFileSync('sami.mid')

// Parse it into an intermediate representation
// This will take any array-like object.  It just needs to support .length, .slice, and the [] indexed element getter.
// Buffers do that, so do native JS arrays, typed arrays, etc.
var parsed = parseMidi(input);

fs.writeFileSync("out.json", JSON.stringify(parsed));

console.log(parsed);