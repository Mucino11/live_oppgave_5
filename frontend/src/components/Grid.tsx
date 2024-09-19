import { useState } from "react";
import Student from "./Student";
import AddStudentForm from "./AddStudentForm";
import type { Student as StudentProp } from "./Type";

type GridProps = {
  students: StudentProp[];
};

export default function Grid(props: GridProps) {
  const [students, setStudents] = useState(props.students ?? []);

  const handleAddStudent = (newStudent: StudentProp) => {
    setStudents([...students, newStudent]);
  };

  return (
    <div>
      <article className="grid">
        {students.map((student) => (
          <Student key={student.id} name={student.name} id={student.id} />
        ))}
      </article>
      <AddStudentForm onAddStudent={handleAddStudent} />
    </div>
  );
}
