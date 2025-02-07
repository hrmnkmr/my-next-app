'use client';

import AddTask from '@/src/app/components/AddTask';
import TodoList from '@/src/app/components/TodoList';

export default function Home() {

  return (
    <main>
      <h1>Nextjs 13 Todo App</h1>
      <div>
        <div>
          <AddTask />
          <TodoList />
        </div>
      </div>
    </main>
  );
}
