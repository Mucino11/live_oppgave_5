import { useState } from "react";
import Grid from "./components/Grid";
import Total from "./components/Total";
import type { Student } from "./components/types";
import AddStudentForm from "./components/AddStudentForm";
import Filter from "./components/Filter";
import Student from "./components/Student";

const intitalStudent = [
  { id: "1", name: "Ola Normann" },
  { id: "2", name: "Kari Normann" },
];

function App() {
  const [filter, setFilter] = useState("-");

  const [students, setStudents] = useState<Student[]>(intitalStudent ?? []);

  // const options = Array.from(
  //   new Set(
  //     students.map((student) => student.name.trim().split(" ")[0].toLowerCase())
  //   )
  // );

  const options = Array.from(
    students
      .reduce((acc, student: Student) => {
        const name = student.name.trim().split(" ")[0];
        if (acc.has(name)) return acc;

        return acc.set(name, {
          ...student,
          value: name.toLowerCase(),
          label: name,
        });
      }, new Map())
      .values()
  );

  const onFilterChange = (filter: string) => {
    setFilter(filter);
  };

  const onAddStudent = (student: Omit<Student, "id">) => {
    setStudents((prev) => [...prev, { id: crypto.randomUUID(), ...student }]);
  };

  const onRemoveStudent = (id: string) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  // [[key, {}], [key, {}]]
  return (
    <main>
      {/* <Student name="Marius" id="123" /> */}
      <Filter
        filter={filter}
        onFilterChange={onFilterChange}
        options={Object.values(options)}
      />
      <Grid
        students={students}
        // onAddStudent={onAddStudent}
        onRemoveStudent={onRemoveStudent}
      >
        <AddStudentForm onAddStudent={onAddStudent} />
      </Grid>
      <Total total={students.length} />
    </main>
  );
}

export default App;
