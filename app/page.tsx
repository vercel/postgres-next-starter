import { getTodos } from '@/lib/db/queries';
import TodoList from './todo-list';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const todos = await getTodos();

  return (
    <div className="min-h-screen p-8 bg-gray-900">
      <main className="max-w-[350px] mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-100">
          Postgres Starter
        </h1>
        <TodoList initialTodos={todos} />
      </main>
    </div>
  );
}
