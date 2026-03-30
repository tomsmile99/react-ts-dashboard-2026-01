type TableCheckboxProps = {
  checked: boolean;
  onChange: () => void;
};

const TableCheckbox = ({ checked, onChange }: TableCheckboxProps) => {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`flex h-5 w-5 items-center justify-center rounded border transition ${
        checked
          ? "border-blue-500 bg-blue-500 text-white"
          : "border-slate-300 bg-white"
      }`}
    >
      {checked && (
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-3.5 w-3.5"
        >
          <path
            fillRule="evenodd"
            d="M16.704 5.29a1 1 0 010 1.42l-7.2 7.2a1 1 0 01-1.415 0l-3.2-3.2a1 1 0 111.414-1.42l2.493 2.494 6.493-6.494a1 1 0 011.415 0z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
};

export default TableCheckbox;