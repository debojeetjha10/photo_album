/* eslint-disable testing-library/no-unnecessary-act */
// import { render, screen } from "@testing-library/react";

// test("renders learn react link", () => {
//   render(<Navbar />);
//   const linkElement = screen.getByText(/Photo Galary/i);
//   expect(linkElement).toBeInTheDocument();
// });
import Navbar from "./Navbar";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from 'react-dom/test-utils';

it("renders Navbar snapshot", () => {
  const { asFragment } = render(<Navbar />);
  expect(asFragment(<Navbar />)).toMatchSnapshot();
});

it("renders Navbar snapshot with refreshFN", () => {
  const { asFragment } = render(<Navbar refreshFn={async () => {}} />);
  expect(asFragment(<Navbar refreshFn={async () => {}} />)).toMatchSnapshot();
});

it("runs refresh function on click on button", async () => {
  const refreshFn = jest.fn();
  render(<Navbar refreshFn={refreshFn} />);
  const button = screen.getByTestId('navbar-refresh-button');
  await act(async () => fireEvent.click(button));
  expect(refreshFn).toHaveBeenCalled();
  expect(true).toBeTruthy();
});
