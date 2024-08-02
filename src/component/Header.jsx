import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ numberOfItemPacked, totalNumberOfItems }) {
  return (
    <header>
      <Logo />
      <Counter
        numberOfItemPacked={numberOfItemPacked}
        totalNumberOfItems={totalNumberOfItems}
      />
    </header>
  );
}
