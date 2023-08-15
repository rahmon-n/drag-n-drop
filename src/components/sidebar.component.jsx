import Shape from './shape.component';

const Sidebar = ({ onDragStart }) => {
  return (
    <div className="w-1/4 shrink-0 border p-4">
      <div className="flex flex-col gap-3">
        <Shape onDragStart={onDragStart} type="circle" />
        <Shape onDragStart={onDragStart} type="certificate" />
        <Shape onDragStart={onDragStart} type="square" />
        <Shape onDragStart={onDragStart} type="star" />
        <Shape onDragStart={onDragStart} type="play" />
      </div>
    </div>
  );
};

export default Sidebar;
