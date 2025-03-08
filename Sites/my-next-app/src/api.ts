import { Task } from "./types";

export const getAllTodos = async (): Promise<Task[]> => {
  try {
    const res = await fetch('http://localhost:3006/tasks', {
      cache: "no-store",  // 毎回最新のデータを取得する設定
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch todos: ${res.statusText}`);
    }

    const todos = await res.json();
    return todos;
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];  // エラー時に空の配列を返す
  }
};

export const addTodo = async (todo: Task): Promise<Task> => {
  try {
    const res = await fetch('http://localhost:3006/tasks', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    const newTodo = await res.json();
    return newTodo;
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error;  // エラーを再スローして呼び出し元で処理させる
  }
};

export const editTodo = async (id: string,newText: string): Promise<Task> => {
    const res = await fetch(`http://localhost:3006/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: newText }),
    });

    const updatedTodo = res.json();

    return updatedTodo;
  };
