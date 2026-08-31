import { useState } from "react";
import NoteForm from "./components/NoteForm";

interface Props {}

interface Note {
  title: string;
  description: string;
}

const App = (props: Props) => {
  const [formValue, setFormValue] = useState<Note>({
    title: "",
    description: "",
  });

  const [notes, setNotes] = useState<Note[]>([]);

  return (
    <div>
      <NoteForm
        formValue={formValue}
        setFormValue={setFormValue}
        setNotes={setNotes}
      />

      {/* Notes */}
      <div className="w-80 p-5 grid grid-cols-3 mt-10 space-y-4">
        {notes.map((note, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <h2 className="font-bold text-xl">{note.title}</h2>
            <p>{note.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
