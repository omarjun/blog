import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Dropdown from './Dropdown';

function ProfileIcon() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  function handleProfileClick() {
    setDropdownVisible(!isDropdownVisible);
  }

  function closeDropdown() {
    setDropdownVisible(false);
  }

  function handleOptionSelect(option) {
    // Handle the selected option, e.g., navigate to a specific page
    
    closeDropdown(); // Close the dropdown after selection
  }

  const dropdownOptions = [
    { id: 1, label: 'Profile' },
    { id: 2, label: 'Settings' },
    
  ];

  return (
    <div className="relative">
      <button onClick={handleProfileClick} className="border-none bg-transparent cursor-pointer">
        <FontAwesomeIcon icon={faUser} size="2x" />
      </button>

      {isDropdownVisible && <Dropdown options={dropdownOptions} onSelect={handleOptionSelect} onClose={closeDropdown} />}
    </div>
  );
}

export default ProfileIcon;
