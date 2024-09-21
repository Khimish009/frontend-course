import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface Loader {
  className?: string;
}

export const Loader = ({ className }: Loader) => {
  return (
    <div className={classNames('lds-ellipsis', {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
