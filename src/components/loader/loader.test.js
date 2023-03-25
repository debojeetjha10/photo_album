import Loader from "./loader";
import { render } from "@testing-library/react";

it("renders Navbar snapshot", () => {
  const { asFragment } = render(<Loader />);
  expect(asFragment(<Loader />)).toMatchSnapshot();
});
