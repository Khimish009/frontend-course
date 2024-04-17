import { classNames } from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import {useTheme} from "app/providers/ThemeProvider";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames(cls.themeSwitcher, {}, [className])}>
      <button
        onClick={toggleTheme}
      >
        Change theme
      </button>
    </div>
  );
};
