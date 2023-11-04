import { useState, useRef, useEffect } from 'react';

// Use effect prend 2 paramètres:
// fonction d'effet, qui sera appelée après le rendu
// liste de dépendances
// vide: la fonction d'effet sera appelée après chaque rendu
// [] : exécute une seule fois, après le premier rendu
// [nom, nombre]: exécute quand nom ou nombre est modifié

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      console.log('Appel à video.play()');
      ref.current.play();
    } else {
      console.log('Appel à video.pause()');
      ref.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    console.log('Appelé une seule fois, au montage');
    return () => console.log('Appelé au cleanup, au démontage');
  }, []);

  useEffect(() => {
    connectToPerson(userID);
    return () => disconnectFromPerson(user);
  }, [userID]);

  return <video ref={ref} src={src} loop playsInline />;
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [text, setText] = useState('');
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Lecture'}
      </button>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Cacher' : 'Afficher'}
      </button>
      {isVisible && (
        <VideoPlayer
          isPlaying={isPlaying}
          src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
        />
      )}
    </>
  );
}
