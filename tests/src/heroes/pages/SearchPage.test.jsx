import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { SearchPage } from "../../../../src/heroes/pages/SearchPage";

describe("Test on <SearchPage />", () => {
  test("should show default values", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test("should show correct info in the input based on the queryString", () => {
    const queryString = "batman";

    render(
      <MemoryRouter initialEntries={[`/searh?q=${queryString}`]}>
        <SearchPage />
      </MemoryRouter>
    );

    const inputEl = screen.getByRole("textbox");

    expect(inputEl.value).toBe(queryString);
  });
});
