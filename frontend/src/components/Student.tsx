import React from "react";
import Avatar from "./Avatar";
import type { Student as StudentProps } from "./Type";

export default function Student(props: StudentProps) {
  const { id, name } = props;
  return (
    <div>
      <Avatar name={name} />
      <p className="student-name">{name}</p>
    </div>
  );
}
