import { NavLink } from "react-router-dom";

function LinkItem({ to, children }) {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          `${
            isActive ? "active" : "inactive"
          } uppercase text-white ff-sans-cond letter-spacing-2`
        }
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default LinkItem;
