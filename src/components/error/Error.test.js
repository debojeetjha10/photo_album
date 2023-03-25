import Error from "./Error";
import { render } from "@testing-library/react";

it("renders Navbar snapshot", () => {
  const { asFragment } = render(<Error />);
  expect(asFragment(<Error />)).toMatchSnapshot();
});
