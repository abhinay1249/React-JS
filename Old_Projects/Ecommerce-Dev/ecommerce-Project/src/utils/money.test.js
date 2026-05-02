import {describe, expect, it} from 'vitest';
import { formatMoney } from './money';

describe('Format Money',()=>{
    it('Format Money 1090 cents into $10.90', () => {
        expect(formatMoney(1090)).toBe('$10.90');
    });

    it('Format Money 90149 cents Into $90.149',()=>{
        expect(formatMoney(9014)).toBe('$90.14');
    })
})
    