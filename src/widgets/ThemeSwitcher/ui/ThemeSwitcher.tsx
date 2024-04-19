import { classNames } from "shared/lib/classNames/classNames"
import {useTheme} from "app/providers/ThemeProvider"
import ThemeLight from 'shared/assets/icons/theme-light.svg'
import ThemeDark from 'shared/assets/icons/theme-dark.svg'
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext"
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  var merge = function(nums1: number[], m: number, nums2: number[], n: number) {
    let pointer = nums1.length - 1
    let num1Pointer = m - 1
    let num2Pointer = n - 1

    while(num2Pointer >= 0) {
      console.log(num1Pointer, num2Pointer, nums1)
      if(nums2[num2Pointer] > nums1[num1Pointer]) {
        nums1[pointer] = nums2[num2Pointer]
        pointer--
        num2Pointer--
      } else {
        nums1[pointer] = nums1[num1Pointer]
        nums1[num1Pointer] = nums2[num2Pointer]
        pointer--
        num1Pointer--
        num2Pointer--
      }
    }

    return nums1
  };


  console.log(merge([1,2,3,0,0,0],  3, [2,5,6], 3))

  return (
    <div className={classNames(cls.themeSwitcher, {}, [className])}>
      <button
        onClick={toggleTheme}
      >
        {theme === Theme.LIGHT ? <ThemeDark/> : <ThemeLight />}
      </button>
    </div>
  );
};
