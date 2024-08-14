export default function Box({ children, isOpen, button }) {
  return (
    <div className={isOpen ? "box" : "box tips"}>
      {!isOpen && (
        <>
          {button}
          <p>Press ENTER to focus on the query.</p>
          <p>Press Esc to close the movie details tab.</p>
        </>
      )}
      {isOpen && children}
    </div>
  );
}
