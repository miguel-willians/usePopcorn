import WatchedMovie from "./WatchedMovie";

export default function WatchedMoviesList({ watched, onDeleteWatched }) {
  return watched.length > 0 ? (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  ) : (
    <div className="no-movies">
      <p>You haven't watched any movies yet...</p>
      <p>
        <em>Start adding some to your list!</em>
      </p>
    </div>
  );
}
