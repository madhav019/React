import Cart from "../components/Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(data);
    },
  });
});

it("Should load the cart items", async () => {
  await act(async () => render(<Cart />));
});
