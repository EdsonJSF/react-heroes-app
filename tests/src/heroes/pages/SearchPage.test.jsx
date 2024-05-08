import { render } from "@testing-library/react";
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
});
