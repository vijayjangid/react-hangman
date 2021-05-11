import "./style.css";
export default function Footer() {
  return (
    <div className="footer neumorph disabled">
      <div>
        Github:{" "}
        <a
          href="https://github.com/vijayjangid/react-hangman"
          title="Github React-Hangman"
        >
          @vijayjangid/react-hangman
        </a>
      </div>
      <div className="divider" />
      <div>
        Logo made by
        <a
          href="https://www.flaticon.com/authors/smalllikeart"
          title="smalllikeart"
        >
          smalllikeart
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
}
