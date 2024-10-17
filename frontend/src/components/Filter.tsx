import type { PropsWithChildren } from "react";

type FilterProps = {
  filter: string;
  options: { id: string; label: string; value: string }[];
};

export default function Filter(props: PropsWithChildren<FilterProps>) {
  const { filter, options } = props;
  return (
    <section className="filter">
      <select value={filter}>
        {[{ id: "default", value: "", label: "-" }, ...options].map(
          ({ id, label, value }) => (
            <option key={id} value={value}>
              {label}
            </option>
          )
        )}
      </select>
    </section>
  );
}
