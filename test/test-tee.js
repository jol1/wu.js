describe("wu.tee", () => {
  it("should clone iterables", () => {
    const factorials = wu.reductions(wu.count(1), (a, b) => {
      return a * b;
    });
    const [i1, i2] = wu.tee(factorials);

    assert.equal(i1.next().value, 1);
    assert.equal(i1.next().value, 2);
    assert.equal(i1.next().value, 6);
    assert.equal(i1.next().value, 24);

    assert.equal(i2.next().value, 1);
    assert.equal(i2.next().value, 2);
    assert.equal(i2.next().value, 6);
    assert.equal(i2.next().value, 24);
  });
});