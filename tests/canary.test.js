describe("the canary meets gas", () => {
  it("should not kill the canary", () => {
    expect.assertions(1);
    expect(true).toBe(true);
  });

  it("process.env.ENV should be 'test'", () => {
    expect.assertions(1);
    expect(process.env.ENV).toBe("test");
  });
});
