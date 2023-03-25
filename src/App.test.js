import App from "./App";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
afterAll(() => cleanup());
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Photo Gallery/i);
  expect(linkElement).toBeTruthy();
});

test.skip("Refetches the Photos onPress refresh Button", () => {
  render(<App />);
});
