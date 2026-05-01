import {describe, it, expect} from 'vitest';
import {formatMoney} from './money';

describe('Format Money',()=>{
    it('Format Money 0 cents to $0.00',()=>{
        expect(formatMoney(0)).toBe('$0.00');
    });
})