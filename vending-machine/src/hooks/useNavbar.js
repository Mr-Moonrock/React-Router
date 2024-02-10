import { useState } from 'react';

const useNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  return { showNavbar, setShowNavbar };
};

export default useNavbar;