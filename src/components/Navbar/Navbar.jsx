import LinkItem from "./LinkItem";

const links = [
  {
    to: "/",
    number: "00",
    text: "Home",
    active: true,
  },
  {
    to: "destination",
    number: "01",
    text: "Destination",
  },
  {
    to: "crew",
    number: "02",
    text: "Crew",
  },
  {
    to: "technology",
    number: "03",
    text: "Technology",
  },
];

function Navbar({ hideNavbar }) {
  return (
    <nav>
      <ul
        id="primary-navigation"
        className={`primary-navigation flex underline-indicators`}
        data-visible={hideNavbar ? "false" : "true"}
      >
        {links.map((link) => (
          <LinkItem key={link.number} active={link.active} to={link.to}>
            <span aria-hidden={"true"}>{link.number}</span>
            {link.text}
          </LinkItem>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
