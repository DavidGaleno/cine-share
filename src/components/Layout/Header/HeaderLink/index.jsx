import { NavLink } from "react-router-dom"

export const HeaderLink = ({ to, label, color, fontSize }) => {
    return (
        <NavLink to={to} style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none', color: color, fontSize: fontSize })}>{label}</NavLink>
    )
}