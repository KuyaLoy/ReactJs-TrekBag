import { useItemStore } from "../stores/itemsStore";
import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
  const items = useItemStore((state) => state.items);

  <header>
    <Logo />
    <Counter
      numberOfItemPacked={items.filter((item) => item.pakced).length}
      totalNumberOfItems={items.length}
    />
  </header>;
}
