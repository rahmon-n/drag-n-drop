import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation.component';
import Home from './routes/home.component';
import Editor from './routes/editor.component';
import { useLocalStorage } from './utils/useLocalStorage';
import { useState } from 'react';

const App = () => {
  const [userName, setUserName, onSave] = useLocalStorage('user', '');
  const [isSaved, setIsSaved] = useState(userName);

  const onSaveHandler = () => {
    setIsSaved(true);
    onSave();
  };

  return (
    <div className="flex flex-col min-h-screen ">
      <Navigation />
      <div className="flex gap-3 justify-center items-center mt-2">
        {isSaved ? (
          <>
            <span className="text-gray-400 py-2 px-4">{userName}</span>
            <button
              className="bg-black text-white rounded py-2 px-4 inline-block hover:text-black hover:bg-gray-400 transition-colors"
              onClick={() => setIsSaved(false)}
            >
              rename
            </button>
          </>
        ) : (
          <>
            <input
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              className="border rounded py-2 px-4"
            />
            <button
              className="bg-black text-white rounded py-2 px-4 inline-block hover:text-black hover:bg-gray-400 transition-colors"
              onClick={onSaveHandler}
            >
              Save your Name
            </button>
          </>
        )}
      </div>
      {/* container */}
      <div className="mx-auto px-5 w-full text-center">
        <Routes>
          <Route index element={<Home />} />
          <Route path="editor" element={<Editor />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
