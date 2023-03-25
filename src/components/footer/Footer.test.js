import Footer from "./Footer";
import { render } from "@testing-library/react";

it("renders Navbar snapshot", () => {
  const { asFragment } = render(<Footer />);
  expect(asFragment(<Footer />)).toMatchSnapshot();
});
