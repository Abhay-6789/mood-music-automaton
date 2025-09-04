interface PlaylistCardProps {
  title: string;
  artist: string;
  image: string;
  index: number;
}

const PlaylistCard = ({ title, artist, image, index }: PlaylistCardProps) => {
  return (
    <div 
      className="group relative bg-gradient-glass backdrop-blur-glass border border-white/20 rounded-xl p-4 hover:shadow-neon transition-all duration-300 hover:scale-105 animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="aspect-square rounded-lg overflow-hidden mb-3 shadow-card">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h3 className="font-semibold text-foreground text-sm mb-1 truncate">{title}</h3>
      <p className="text-muted-foreground text-xs truncate">{artist}</p>
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl" />
    </div>
  );
};

export default PlaylistCard;