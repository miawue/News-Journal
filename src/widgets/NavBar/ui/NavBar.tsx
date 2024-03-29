import { classNames } from "shared/lib/classNames/classNames";
import cls from './NavBar.module.scss'
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface NavBarProps {
  className?: string
}

export function NavBar({className}: NavBarProps) {

  return ( 
    <div className={classNames(cls.NavBar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to='/'>
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
          О сайте
        </AppLink>
      </div>
    </div>
   );
}
