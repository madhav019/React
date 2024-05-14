import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResturantCard, { withDiscount } from "../components/ResturantCard";
import MOCK_DATA from "../mocks/resturantCardMock.json";

it("Should render ResturantCard component with props Data", () => {
  render(<ResturantCard data={MOCK_DATA} />);

  const name = screen.getByText(MOCK_DATA.info.name);

  expect(name).toBeInTheDocument();
});

it("Should render ResturantCard with discounts", () => {
  const ResturantCardDiscounted = withDiscount(ResturantCard);

  render(<ResturantCardDiscounted data={MOCK_DATA} />);

  const discountValue = screen.getByText(
    new RegExp(MOCK_DATA.info.aggregatedDiscountInfoV3.header)
  );

  expect(discountValue).toBeInTheDocument();
});
