import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "shared/uiKit/Button/Button";

describe("Button", () => {
  test("Test render", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });

  test("Test clear theme", () => {
    render(<Button theme={ThemeButton.CLEAR}>CLEAR</Button>);
    expect(screen.getByText("CLEAR")).toHaveClass("clear");
    screen.debug();
  });
});
