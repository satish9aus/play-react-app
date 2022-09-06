import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "./App";
import delay from "redux-saga";

it(`async test 1`, (done) => {
  setTimeout(done, 100);
});

it(`async test 1`, () => {
  return new Promise((resolve) => setTimeout(resolve, 100));
});

it(`asynch test 3`, async () => await delay(100));

test(`render component`, () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});

describe("render component snapshot", () => {
  it("render compo", () => {
    const tree = renderer.create(<App />).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});
