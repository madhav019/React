import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../components/Contact";

test("Should load contact us componenet", () => {
  //   Render
  render(<Contact />);

  //   Quering
  const heading = screen.getByRole("heading");

  //   Assertion
  expect(heading).toBeInTheDocument();
});

// It is just used to create a seprate blocks for the similar kind of test cases.
describe("Test Case Set 1", () => {
  // it and test are same thing
  it("Should load 2 input text boxes", () => {
    render(<Contact />);

    const inputs = screen.getAllByRole("textbox");

    //   console.log(inputs);

    expect(inputs.length).toBe(2);
  });
});
