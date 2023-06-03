import { Link, Route, Routes } from "react-router-dom"
import { Suspense } from "react"
import './styles/index.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { useTheme } from "./providers/ThemeProvider"
import AboutPage from "pages/AboutPage/ui/AboutPage"
import { MainPage } from "pages/MainPage"
import { AppRouter } from "./providers/routes"
import { NavBar } from "widgets/NavBar"

const App = () => {
  const {theme, toggleTheme} = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar />
      <button onClick={toggleTheme}>Toggle theme</button>
      <AppRouter />
    </div>
  )
}

export default App