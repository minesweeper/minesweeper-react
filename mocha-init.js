import assert from 'assert';
import sd from 'skin-deep';
import expect from 'expect';
import expectJSX from 'expect-jsx';

expect.extend(expectJSX);

global.assert = assert;
global.sd = sd;
global.expect = expect;
