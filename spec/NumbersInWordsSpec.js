describe("Converter", function () {

  var runs = [
    { args: [1],      result: "one" },
    { args: [11],     result: "eleven" },
    { args: [21],     result: "twenty-one" },
    { args: [30],     result: "thirty" },
    { args: [101],    result: "one hundred and one" },
    { args: [140],    result: "one hundred and forty" },
    { args: [168],    result: "one hundred and sixty-eight" }
  ];

  it('returns correct string for number', function () {
    runs.forEach(function (run) {
      var result = Converter.apply(this, run.args);
      expect(result).toEqual(run.result);
    });
  });
});
