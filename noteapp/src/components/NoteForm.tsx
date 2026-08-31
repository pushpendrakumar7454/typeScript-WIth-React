
import React from "react";

interface Props {
  formValue: {
    title: string;
    description: string;
  };

  setFormValue: React.Dispatch<
    React.SetStateAction<{
      title: string;
      description: string;
    }>
  >;
}

const NoteForm = ({ formValue, setFormValue }: Props) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-5">Create Note</h2>

      <form className="space-y-4">
        {/* Title */}
        <div>
          <label className="block mb-2 font-medium">
            Title
          </label>

          <input
            type="text"
            name="title"
            value={formValue.title}
            onChange={handleChange}
            placeholder="Enter title"
            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 font-medium">
            Description
          </label>

          <textarea
            name="description"
            value={formValue.description}
            onChange={handleChange}
            placeholder="Enter description"
            rows={5}
            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-md font-medium border"
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default NoteForm;

