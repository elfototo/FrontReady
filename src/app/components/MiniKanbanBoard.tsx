import { useState } from "react";

type Tasks = {
    id: number;
    title: string;
    
}

export default function MiniKanbanBoard() {
    const [tasks, setTasks] = useState();
    const [tasksInProgress, setTasksInProgress] = useState();
    const [tasksDone, setTasksDone] = useState();
    


    return(
        <main>

        </main>
    )
}