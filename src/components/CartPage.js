const CartPage = ({ items }) => {
  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CartPage;

  