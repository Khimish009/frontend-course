import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';
import { FC } from 'react';
import { AppLinkTheme } from 'shared/types';

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = props => {
  const {
    to,
    className,
    theme = AppLinkTheme.PRIMARY,
    children,
    ...rest
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.appLink, {}, [className, theme])}
      {...rest}
    >
      {children}
    </Link>
  );
};
