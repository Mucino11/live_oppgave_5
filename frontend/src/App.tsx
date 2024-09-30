import { useState } from "react";
import Grid from "./components/Grid";
import Total from "./components/Total";
import type { Student } from "./components/types";

const intitalStudent = [
  { id: "1", name: "Musa Normann" },
  { id: "2", name: "Kari Normann" },
  { id: "3", name: "Ola Normann" },
  { id: "4", name: "John Normann" },
];

function App() {
  // students ?? []
  const [students, setStudents] = useState<Student[]>(intitalStudent ?? []);

  const onAddStudent = (student: Omit<Student, "id">) => {
    setStudents((prev) => [...prev, { id: crypto.randomUUID(), ...student }]);
  };

  const onRemoveStudent = (id: string) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  return (
    <main>
      {/* <Student name="Marius" id="123" /> */}
      <Grid
        students={students}
        onAddStudent={onAddStudent}
        onRemoveStudent={onRemoveStudent}
      />
      <Total total={students.length} />
    </main>
  );
}

export default App;
