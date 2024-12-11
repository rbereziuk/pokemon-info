import { Draggable } from '@hello-pangea/dnd';

interface Props {
  id: string;
  index: number;
  title: string;
  onClick: () => void;
}

export const ListItem: React.FC<Props> = ({ title, onClick, id, index }) => {
  return (
    <Draggable draggableId={id + ''} index={index}>
      {(provided) => (
        <li
          className="mb-2 flex items-center"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <button
            onClick={onClick}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 w-full rounded capitalize"
          >
            {title}
          </button>
          <span {...provided.dragHandleProps} className="ml-1">
            ↕️
          </span>
        </li>
      )}
    </Draggable>
  );
};
