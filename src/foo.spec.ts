import {expect} from 'chai';

describe('a test', () => {
    it('passes in the browser', () => {
        expect(true).to.be.true;
    });
    it('fails in the browser', () => {
        expect(false).to.be.true;
    });
})