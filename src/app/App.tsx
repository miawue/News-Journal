import { Link, Route, Routes } from "react-router-dom"
import { Suspense } from "react"
import './styles/index.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { useTheme } from "./providers/ThemeProvider"
import AboutPage from "pages/AboutPage/ui/AboutPage"
import { MainPage } from "pages/MainPage"
import { AppRouter } from "./providers/routes"

const App = () => {
  const {theme, toggleTheme} = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О сайте</Link>
      <AppRouter />
    </div>
  )
}

export default App