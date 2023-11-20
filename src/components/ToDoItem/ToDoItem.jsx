import { Button } from "../Button/Button";

export const ToDoItem = ({
  name,
  done,
  onDeleteButtonClick,
  onDoneButtonClick,
}) => {
  return (
    <li className="mt-4 flex min-w-[400px] items-center gap-2 border-t border-black pt-4">
      <span className={`w-full ${done ? "line-through" : ""}`}>{name}</span>
      {!done && (
        <Button
          onClick={onDoneButtonClick}
          className="hover:bg-skyblue cursor-pointer rounded border border-current px-3 py-1 transition-colors hover:text-white "
        >
          Zrobione
        </Button>
      )}
      <Button
        onClick={onDeleteButtonClick}
        className="hover:bg-skyblue cursor-pointer rounded border border-current px-3 py-1 transition-colors hover:text-white "
      >
        Usuń
      </Button>
    </li>
  );
};
