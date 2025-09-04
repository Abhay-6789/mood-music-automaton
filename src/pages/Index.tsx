import { useState } from "react";
import { Sparkles } from "lucide-react";
import FloatingNotes from "@/components/FloatingNotes";
import MoodInput from "@/components/MoodInput";
import PlaylistCard from "@/components/PlaylistCard";
import { useToast } from "@/hooks/use-toast";

// Import album cover images
import jazzAlbum from "@/assets/jazz-album-1.jpg";
import electronicAlbum from "@/assets/electronic-album.jpg";
import indieAlbum from "@/assets/indie-album.jpg";
import classicalAlbum from "@/assets/classical-album.jpg";

// Mock playlist data
const samplePlaylists = {
  "rainy night with jazz vibes": [
    { title: "Midnight Blue", artist: "Sarah McKenzie", image: jazzAlbum },
    { title: "Neon Nights", artist: "Synthwave Collective", image: electronicAlbum },
    { title: "Coffee & Rain", artist: "The Indie Sessions", image: indieAlbum },
    { title: "Moonlight Sonata", artist: "Classical Dreams", image: classicalAlbum },
  ],
  default: [
    { title: "Smooth Operator", artist: "Jazz Ensemble", image: jazzAlbum },
    { title: "Digital Dreams", artist: "Electronic Waves", image: electronicAlbum },
    { title: "Sunset Boulevard", artist: "Indie Roads", image: indieAlbum },
    { title: "Piano Reflections", artist: "Modern Classical", image: classicalAlbum },
  ]
};

const Index = () => {
  const [playlist, setPlaylist] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentMood, setCurrentMood] = useState("");
  const { toast } = useToast();

  const generatePlaylist = async (mood: string) => {
    setIsLoading(true);
    setCurrentMood(mood);

    // Simulate API call
    setTimeout(() => {
      const playlistData = samplePlaylists[mood.toLowerCase()] || samplePlaylists.default;
      setPlaylist(playlistData);
      setIsLoading(false);
      
      toast({
        title: "✨ Playlist Generated!",
        description: `Created a perfect playlist for "${mood}"`,
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      <FloatingNotes />
      
      {/* Header */}
      <header className="relative z-10 pt-12 pb-8">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-primary rounded-2xl shadow-glow animate-pulse-glow">
              <Sparkles size={32} className="text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              AI Jukebox
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Describe your perfect mood and let AI curate the ultimate playlist for you
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Mood Input Section */}
          <div className="mb-16">
            <MoodInput onGenerate={generatePlaylist} isLoading={isLoading} />
          </div>

          {/* Playlist Display */}
          {(playlist || isLoading) && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  {isLoading ? "Generating Your Playlist..." : "Your Perfect Playlist"}
                </h2>
                {currentMood && !isLoading && (
                  <p className="text-muted-foreground text-lg">
                    Curated for: <span className="text-neon-purple font-medium">"{currentMood}"</span>
                  </p>
                )}
              </div>

              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[...Array(4)].map((_, index) => (
                    <div
                      key={index}
                      className="bg-gradient-glass backdrop-blur-glass border border-white/20 rounded-xl p-4 animate-pulse"
                    >
                      <div className="aspect-square rounded-lg bg-white/10 mb-3" />
                      <div className="h-4 bg-white/10 rounded mb-2" />
                      <div className="h-3 bg-white/10 rounded w-2/3" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {playlist.map((track, index) => (
                    <PlaylistCard
                      key={index}
                      title={track.title}
                      artist={track.artist}
                      image={track.image}
                      index={index}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Call to Action */}
          {!playlist && !isLoading && (
            <div className="text-center space-y-6 mt-20">
              <div className="bg-gradient-glass backdrop-blur-glass border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto shadow-card">
                <h3 className="text-2xl font-bold text-foreground mb-4">Ready to discover new music?</h3>
                <p className="text-muted-foreground mb-6">
                  Our AI understands the subtle nuances of your mood and creates the perfect soundtrack for any moment.
                </p>
                <div className="flex flex-wrap gap-4 justify-center text-sm">
                  <div className="flex items-center gap-2 text-neon-purple">
                    <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" />
                    Mood Analysis
                  </div>
                  <div className="flex items-center gap-2 text-neon-pink">
                    <div className="w-2 h-2 bg-neon-pink rounded-full animate-pulse" />
                    Smart Curation
                  </div>
                  <div className="flex items-center gap-2 text-neon-cyan">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
                    Instant Playlists
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 via-transparent to-neon-pink/5 pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
    </div>
  );
};

export default Index;