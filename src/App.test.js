/* eslint-disable testing-library/no-unnecessary-act */
import App from "./App";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

afterAll(() => cleanup());
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Photo Gallery/i);
  expect(linkElement).toBeTruthy();
});

test("calls update all query onPress refresh Button", async () => {
  const {QueryClient } = require("react-query");
  const refetchQueriesFn = jest.fn();
  QueryClient.prototype.refetchQueries = refetchQueriesFn;
  render(<App />);
  const element = screen.getByTestId("navbar-refresh-button");
  await act(async () => fireEvent.click(element));
  expect(refetchQueriesFn).toBeCalled();
});
