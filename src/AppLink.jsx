import { NavLink } from "react-router-dom"

export const AppLink = ({to, children}) => {
    return <NavLink to={to}>{children}</NavLink>
}