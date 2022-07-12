
it('should calculate the monthly rate correctly even with outliner', function () {
  expect (calculateMonthlyPayment({amount:12000,rate:0,years:12})).toEqual(NaN);
  expect (calculateMonthlyPayment({amount:12000,rate:2,years:1})).toEqual('999.08');
});


it("should return a result with 2 decimal places", function() {
  let value = {amount:1000,rate:2,years:2};
  expect (calculateMonthlyPayment(value)).toEqual('41.59')
});

/// etc
