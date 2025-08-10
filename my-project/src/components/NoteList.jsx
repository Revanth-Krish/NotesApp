import { useState } from "react";

export default function NoteList({ notes, onDelete, onEdit }) {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const startEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    onEdit(id, editText);
    setEditingId(null);
  };

  return (
    <ul className="space-y-2">
      {notes.map((note) => (
        <li key={note.id} className="border p-2 rounded flex justify-between items-center">
          {editingId === note.id ? (
            <>
              <input
                type="text"
                className="border px-2 py-1 flex-1 mr-2"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                onClick={() => saveEdit(note.id)}
              >
                Save
              </button>
              <button
                className="bg-gray-500 text-white px-2 py-1 rounded"
                onClick={() => setEditingId(null)}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <span>{note.text}</span>
              <div className="space-x-2">
                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                  onClick={() => startEdit(note.id, note.text)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => onDelete(note.id)}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
