import {ButtonHTMLAttributes, FC} from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props, context) => {
  const {
    className,
    theme = ButtonTheme.CLEAR,
    ...rest
  } = props;

  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...rest}
    >

    </button>
  );
};
