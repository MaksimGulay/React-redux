export const LevelFilter = ({ value, onChange }) => {
  return (
    <div>
      <select value={value} onChange={evt => onChange(evt.target.value)}>
        <option value="all">All</option>
        <option value="beginner">Beginer</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
    </div>
  );
};
