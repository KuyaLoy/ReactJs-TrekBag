import { useItemsContext } from "../lib/hooks";
import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
  const { items } = useItemsContext();

  <header>
    <Logo />
    <Counter
      numberOfItemPacked={items.filter((item) => item.pakced).length}
      totalNumberOfItems={items.length}
    />
  </header>;
}
