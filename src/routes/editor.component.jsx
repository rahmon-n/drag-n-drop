import Sidebar from '../components/sidebar.component';
import Shape from '../components/shape.component';
import { useLocalStorage } from '../utils/useLocalStorage';

const Editor = () => {
  const [shapes, setShapes, onSave, onRemove] = useLocalStorage('shapes', []);

  const handleDragStart = (event) => {
    event.dataTransfer.setData('shape', event.target.dataset.shape);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const shapeType = event.dataTransfer.getData('shape');
    const x = event.clientX - event.target.getBoundingClientRect().left;
    const y = event.clientY - event.target.getBoundingClientRect().top;
    // { type: shapeType, x, y }
    const existingShapeIndex = shapes.findIndex(
      (shape) => shape.type === shapeType
    );

    if (existingShapeIndex !== -1) {
      const newShapes = [...shapes];
      newShapes[existingShapeIndex] = {
        ...newShapes[existingShapeIndex],
        x,
        y,
      };
      setShapes(newShapes);
    } else {
      setShapes([...shapes, { type: shapeType, x, y }]);
    }
  };

  return (
    <>
      <div>
        <div className="flex w-full min-h-[60vh] gap-4 mt-4">
          <Sidebar onDragStart={handleDragStart} />
          {/* editor wrapper */}
          <div
            className="w-full border p-4 relative"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {shapes.map((shape, index) => (
              <Shape
                key={index}
                type={shape.type}
                onDragStart={handleDragStart}
                className={'absolute'}
                style={{ left: shape.x + 'px', top: shape.y + 'px' }}
              />
            ))}
          </div>
        </div>
      </div>
      <button
        className="bg-black text-white rounded py-2 px-4 mt-4 inline-block hover:text-black hover:bg-gray-400 transition-colors"
        onClick={onSave}
      >
        save
      </button>
      <button
        className="bg-red-600 text-white rounded py-2 px-4 mt-4  mx-2 inline-block hover:text-black hover:bg-gray-400 transition-colors"
        onClick={onRemove}
      >
        remove
      </button>
    </>
  );
};

export default Editor;
