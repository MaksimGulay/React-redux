const styles = {
  backgroundColor: 'red',
  padding: 16,
};

export const B = ({ value, reset }) => {
  return (
    <div style={styles}>
      Clicks: {value}
      <button onClick={reset}>Reset</button>
    </div>
  );
};
