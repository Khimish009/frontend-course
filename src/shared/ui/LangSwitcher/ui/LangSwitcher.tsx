import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';
import { ThemeButton } from 'shared/types';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toogle = async () => {
    const lang = i18n.resolvedLanguage === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(lang);
  };

  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toogle}
    >
      {t('Язык')}
    </Button>
  );
};
