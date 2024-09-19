import React, { useState } from "react";

type AddStudentFormProps = {
  onAddStudent: (student: { id: number; name: string }) => void;
};

const AddStudentForm: React.FC<AddStudentFormProps> = ({ onAddStudent }) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && id) {
      onAddStudent({ id: parseInt(id), name });
      setName("");
      setId("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id">Student ID:</label>
        <input
          type="number"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="name">Student Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudentForm;
