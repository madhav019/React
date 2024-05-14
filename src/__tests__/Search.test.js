import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import data_res_list from "../mocks/resturantList.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(data_res_list);
    },
  });
});

it("Should render the search button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchButton = screen.getByText("Search");

  expect(searchButton).toBeInTheDocument();
});

it("Should render the Body component with search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const resCards = screen.getAllByTestId("resCard");

  expect(resCards.length).toBe(18);

  const searchInput = screen.getByPlaceholderText(/Search/);

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(screen.getByRole("button", { name: "Search" }));

  expect(screen.getAllByTestId("resCard").length).toBe(1);
});

it("Should render top rated resturants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const topRatedButton = screen.getByRole("button", { name: "Top Rated" });

  fireEvent.click(topRatedButton);

  expect(screen.getAllByTestId("resCard").length).toBe(2);
});
