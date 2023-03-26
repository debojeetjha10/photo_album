/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import Photos from "./Photos";
import { fireEvent, render } from "@testing-library/react";

it("renders Photos snapshot", () => {
  const onClick = jest.fn();
  const { asFragment } = render(<Photos src={"#"} onClick={onClick} />);
  expect(asFragment(<Photos src={"#"} onClick={onClick} />)).toMatchSnapshot();
});

it("runs onClick function", () => {
  const onClick = jest.fn();
  const { container } = render(<Photos src={"#"} onClick={onClick} />);
  fireEvent.click(container.querySelector("img"));
  expect(onClick).toHaveBeenCalled();
});
