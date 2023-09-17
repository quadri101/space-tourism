import { Link } from "react-router-dom";

function LargeButton({ children, to }) {
  return (
    <Link
      to={to}
      className="large-button ff-serif uppercase bg-white text-dark"
    >
      {children}
    </Link>
  );
}

export default LargeButton;
