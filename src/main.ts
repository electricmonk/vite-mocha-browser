import Mocha from './mocha-setup';
import './foo.spec';
import {Test} from "mocha";
// @ts-ignore Shai: runner actually is not a void but has type Mocha.Runner. Can be fixed using a .d.ts file
const runner = Mocha.run() as Mocha.Runner;

const failures: Test[] = [];
runner.on('fail', (test: Test) => {
    failures.push(test);
});

runner.on('end', () => {
    const report = document.querySelector('#mocha')?.innerHTML;
    //TODO send post / websocket message with failures results
    //this could be a cross-frame
})