import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ThemeButton } from 'shared/types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = props => {
  const { className, theme, ...rest } = props;

  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...rest}
    />
  );
};
