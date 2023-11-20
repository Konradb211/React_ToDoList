export const Button = ({ children, onClick }) => {
  return (
    <button
      className="hover:bg-skyblue cursor-pointer rounded border border-current px-3 py-1 transition-colors hover:text-white "
      onClick={onClick}
    >
      {children}
    </button>
  );
};
