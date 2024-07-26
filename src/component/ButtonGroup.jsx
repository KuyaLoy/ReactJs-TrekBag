import Button from "./Button";

const secondaryButtons = [
  "Mark all as complete",
  "Markk all as incomplete",
  "Reset to initial",
  "Remove all items",
];

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
