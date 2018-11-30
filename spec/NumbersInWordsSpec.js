describe("Converter", function () {
  it("should return 'one' when given 1", function() {
    result = Converter(1);
    expect(result).toEqual("one");
  });

  it("should return 'eleven' when given 11", function() {
    result = Converter(11);
    expect(result).toEqual("eleven");
  });

  it("should return 'twenty-one' when given 21", function() {
    result = Converter(21);
    expect(result).toEqual("twenty-one");
  });

  it("should return 'thirty' when given 30", function() {
    result = Converter(30);
    expect(result).toEqual("thirty");
  });
});
