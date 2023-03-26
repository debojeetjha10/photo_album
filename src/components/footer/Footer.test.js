import Footer from "./Footer";
import { render, screen } from "@testing-library/react";

it("renders Navbar snapshot", () => {
  const { asFragment } = render(<Footer />);
  expect(asFragment(<Footer />)).toMatchSnapshot();
});

it("renders copyright text in footer", () => {
  render(<Footer />);
  const element = screen.getByText(/© All rights reserved to Debojeet Jha/i)
  expect(element).toBeTruthy()
})