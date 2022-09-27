const easymidi = require('easymidi');

var controller = "Launchpad Mini"

var inputs = easymidi.getInputs();
var outputs = easymidi.getOutputs();

console.log("Inputs: " + inputs);
console.log("Outputs: " + outputs);

// copied from MatheusMK3/minilabs-utls
console.log('Looking for proper input/output...');
for (i = 0, input = null; input = inputs[i++];) {
    if (~input.indexOf(controller)) {
        console.log(`Found matching input "${input}" at index ${i - 1}.`);
        global.input = new easymidi.Input(input);
        break;
    }
}
for (i = 0, output = null; output = outputs[i++];) {
    if (~output.indexOf(controller)) {
        console.log(`Found matching output "${output}" at index ${i - 1}.`);
        global.output = new easymidi.Output(output);
        break;
    }
}

if (!global.input || !global.output) {
    console.log(`No controller matching "${controller}" was found. Quitting...`);
    process.exit();
    return;
}

input.on('noteon', args => console.log('noteon', args));
//input.on('poly aftertouch', args => console.log('poly aftertouch', args));
input.on('cc', args => console.log('cc', args));
//input.on('program', args => console.log('program', args));
//input.on('channel aftertouch', args => console.log('channel aftertouch', args));
//input.on('pitch', args => console.log('pitch', args));
//input.on('position', args => console.log('position', args));
//input.on('mtc', args => console.log('mtc', args));
//input.on('select', args => console.log('select', args));
//input.on('sysex', args => console.log('sysex', args));