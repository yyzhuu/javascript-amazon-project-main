import { formatCurrency } from "../scripts/utils/money.js";

describe('test suite: formatCurrency', () => { // name, function 
  it('converts cents into dollars', () => { // create a test 
    expect(formatCurrency(2095)).toEqual('20.95'); 
  }); 

  it('works with 0', () => { // create a test 
    expect(formatCurrency(0)).toEqual('0.00'); 
  }); 

  it('rounds up to the nearest cent', () => { // create a test 
    expect(formatCurrency(2000.5)).toEqual('20.01'); 
  }); 
})

