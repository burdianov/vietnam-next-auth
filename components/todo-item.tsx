import type { TodoType } from './../types/index';

export interface TodoItemProps {
  todo: TodoType;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <div className="border shadow-sm my-3 p-2 rounded text-capitalize">
      {todo.name}
    </div>
  );
};

export default TodoItem;
