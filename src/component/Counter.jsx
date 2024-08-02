export default function Counter({ numberOfItemPacked, totalNumberOfItems }) {
  return (
    <p>
      <strong>{numberOfItemPacked}</strong> / {totalNumberOfItems} items packed
    </p>
  );
}
