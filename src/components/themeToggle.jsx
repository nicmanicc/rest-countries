import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="themeButtonContainer">
      <img
        width={30}
        style={{ color: 'white' }}
        src={theme === 'dark' ? '/sun.png' : '/moon.png'}
        alt="dark/light mode img"
      />
      <button className="themeButton" onClick={toggleTheme}>
        {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};
