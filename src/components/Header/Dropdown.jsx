import React from 'react';
import LogoutBtn from './LogoutBtn';

function Dropdown({ options, onSelect}) {
  return (
    <div className="border border-gray-300 p-4 absolute top-12 right-4 bg-white z-10">
      <ul className="list-none p-0">
        {options.map((option) => (
          <li key={option.id} onClick={() => onSelect(option)} className="cursor-pointer hover:bg-gray-200 p-2">
            {option.label}
          </li>
        ))}
      </ul>
      {/* {/ <button onClick={onClose} className="mt-2 p-2 bg-blue-500 text-white">Close Dropdown</button> } */}
      {
        <LogoutBtn/>
      }
    </div>
  );
}

export default Dropdown;
