interface Props {
  title: string;
  onClick: () => void;
}

export const ListItem: React.FC<Props> = ({ title, onClick }) => {
  return (
    <li className="mb-2">
      <button
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded"
      >
        {title}
      </button>
    </li>
  );
};