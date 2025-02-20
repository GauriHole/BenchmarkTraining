import { TaskProvider } from "./context/taskContext";
import TaskManager from "./components/taskManager";

const App = () => {
  return (
    <TaskProvider>
      <TaskManager />
    </TaskProvider>
  );
};

export default App;
