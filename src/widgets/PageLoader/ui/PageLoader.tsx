import { classNames } from 'shared/lib/classNames/classNames';
import './PageLoader.scss';

interface PageLoader {
  className?: string;
}

export const PageLoader = ({ className }: PageLoader) => {
  return (
    <div className={classNames('page-loader', {}, [className])}>
      <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
