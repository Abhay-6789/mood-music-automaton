import { Music, Music2, Music3, Music4 } from "lucide-react";

const FloatingNotes = () => {
  const notes = [
    { Icon: Music, delay: 0, duration: 8, x: "10%", y: "20%" },
    { Icon: Music2, delay: 2, duration: 6, x: "85%", y: "15%" },
    { Icon: Music3, delay: 4, duration: 10, x: "15%", y: "75%" },
    { Icon: Music4, delay: 1, duration: 7, x: "90%", y: "65%" },
    { Icon: Music, delay: 3, duration: 9, x: "75%", y: "85%" },
    { Icon: Music2, delay: 5, duration: 8, x: "5%", y: "45%" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {notes.map((note, index) => (
        <note.Icon
          key={index}
          className="absolute text-neon-purple/20 animate-float"
          size={24}
          style={{
            left: note.x,
            top: note.y,
            animationDelay: `${note.delay}s`,
            animationDuration: `${note.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingNotes;