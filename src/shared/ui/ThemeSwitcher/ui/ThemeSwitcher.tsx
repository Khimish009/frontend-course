import { classNames } from "shared/lib/classNames/classNames";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import ThemeLight from "shared/assets/icons/theme-light.svg";
import ThemeDark from "shared/assets/icons/theme-dark.svg";
import cls from "./ThemeSwitcher.module.scss";
import { Button } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(cls.themeSwitcher, {}, [className])}>
      <Button onClick={toggleTheme}>
        {theme === Theme.LIGHT ? <ThemeDark /> : <ThemeLight />}
      </Button>
    </div>
  );
};
