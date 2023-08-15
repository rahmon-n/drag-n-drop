import { shapesObject } from '../utils/consts';

const Shape = ({ type, style, className, onDragStart }) => {
  return (
    <div
      className={`w-[50px] h-[50px] cursor-move ${className ? className : ''}`}
      data-shape={type}
      onDragStart={onDragStart}
      draggable
      style={style}
    >
      {shapesObject[type]}
    </div>
  );
};

export default Shape;
