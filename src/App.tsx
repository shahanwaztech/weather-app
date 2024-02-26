import React from 'react';
import Temperature from './components/Temperature';

function App() {
  return (
    <div className="bg-[#1F2E43] h-[100vh] gap-[20px] w-[100vw] flex justify-center items-center">
      <div className='w-1/4 h-[330px]'>
        <Temperature />
      </div>
      <div className='bg-blue-300 w-1/2 h-[330px]'>Left</div>
    </div>
  );
}

export default App;
