'use client';

const Select = ({
  value,
  onChange,
  list,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  list: { value: string; label: string }[];
}) => (
  <select value={value} onChange={onChange} className="border-2 border-zinc-900 rounded-lg px-1 text-sm">
    {list.map(({ value, label }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ))}
  </select>
);

export default Select;
