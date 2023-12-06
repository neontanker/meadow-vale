import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders meadow vale project", () => {
  render(<App />);
  const title = screen.getByText(/meadow vale project/i);
  expect(title).toBeInTheDocument();
});
