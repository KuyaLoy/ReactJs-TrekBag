import { secondaryButtons } from "../lib/constants";
import Button from "./Button";

export default function ButtonGroup() {
  return (
    <section className="button-group">
      {secondaryButtons.map((text) => {
        return (
          <Button type="secondary" key={text}>
            {text}
          </Button>
        );
      })}
    </section>
  );
}
