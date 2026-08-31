import { useState } from "react";
import NoteForm from "./components/NoteForm";

interface Props {}

const App = (props: Props) => {
  const [formValue, setFormValue] = useState("")

  return (
    <div>
      <NoteForm   formValue={formValue} setFormValue={setFormValue}/>
    </div>
  );
};

export default App;
