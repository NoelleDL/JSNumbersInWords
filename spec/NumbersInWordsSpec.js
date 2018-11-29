describe("Converter", function () {
  it("should return 'one' when given 1", function() {
    result = Converter(1);
    expect(result).toEqual("one");
  });

  it("should return 'eleven' when given 1", function() {
    result = Converter(11);
    expect(result).toEqual("eleven");
  });
});
