import type { FC, SyntheticEvent } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export interface CreateTodoResponse {
  msg: string;
}

const TodoInput: FC = () => {
  const [todo, setTodo] = useState<string>('');

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post<CreateTodoResponse>('/api/todo', { todo });

      toast.success(res.data.msg);
      setTodo('');
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };

  return (
    <div className="text-center text-secondary mt-4">
      <h2>Todo List</h2>

      <form className="input-group mt-4 mb-5 shadow" onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          className="form-control"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" className="btn btn-dark">
          Create
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
