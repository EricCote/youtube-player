export default function YouTube({ id, width = 435, height = 270 }) {
  return (
    <iframe
      type='text/html'
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${id}`}
      title='Vidéo YouTube'
      frameBorder={0}
      allowFullScreen
    />
  );
}
