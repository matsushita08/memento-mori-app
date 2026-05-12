import type { Choice } from "@/types/game";

type ChoiceListProps = {
  choices: Choice[];
  onChoice: (choice: Choice) => void;
};

export function ChoiceList({ choices, onChoice }: ChoiceListProps) {
  return (
    <div className="space-y-2">
      {choices.map((choice, index) => (
        <button
          key={`${choice.label}-${index}`}
          className="choice-button group"
          type="button"
          data-choice={choice.label}
          onClick={() => onChoice(choice)}
        >
          <span>{index === 0 ? "▶" : " "}</span>
          <span>{choice.label}</span>
        </button>
      ))}
    </div>
  );
}
