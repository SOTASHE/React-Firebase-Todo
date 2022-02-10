import React from "react";
// Firebase
import { addDoc } from "firebase/firestore";

//Adding documents 
const Add = ({ countTask, setReset, reset, colRef }) => {

    const addTask = async (e) => {
        e.preventDefault();
        if(e.target[0].value === "") {
            return;
        }
        const docRef = await addDoc(colRef, {
            index: countTask + 1,
            task: e.target[0].value,
            completed: false,
        })
        //reset form
        e.target[0].value = "";
        setReset(!reset);
    }
    return (
        <form className="add-task" onSubmit={addTask}>
            <label htmlFor="task"></label>
            <input
                type="text"
                id="task"
                placeholder="Create a new todo..."
                autoFocus autoComplete="off"
                required />
        </form>
    )
}

export default Add;
