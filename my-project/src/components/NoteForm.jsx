import { useState } from "react";

export default function NoteForm({onAdd}) {
    const [text, setText] = useState(" ");

    const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
    };


    return (

        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input type="text" value={text} placeholder="Enter note..." className="border rounded  px-2 py-1 flex-1"  onChange={(e)=>setText(e.target.value)}> Your NOTE :</input>
            <button className="bg-green-500 text-white px-4 py-1 rounded"> Add </button>
        </form>
    );
}
