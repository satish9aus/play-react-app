import delay from "redux-saga";
describe("renders learn react link", () => {
  beforeEach(() => {
    console.log("Before each!");
  });

  beforeAll(() => {
    console.log("Before all!");
  });

  afterEach(() => {
    console.log("After each!");
  });

  afterAll(() => {
    console.log("After all!");
  });

  it(`Componet render`, () => {
    expect(2 + 2).toEqual(4);
  });

  it(`Componet render copy`, () => {
    expect(2 + 2).toEqual(4);
  });

  it.skip(`Componet render copy ONLY`, () => {
    expect(2 + 2).toEqual(40);
  });

  it(`asynch test 1`, (done) => {
    setTimeout(done, 100);
  });

  it(`asynch test 2`, () => {
    return new Promise((resolve) => setTimeout(resolve, 100));
  });

  it(`asynch test 3`, async () => await delay(100));
});
