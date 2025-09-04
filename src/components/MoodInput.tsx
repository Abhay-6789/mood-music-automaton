import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles } from "lucide-react";

interface MoodInputProps {
  onGenerate: (mood: string) => void;
  isLoading?: boolean;
}

const MoodInput = ({ onGenerate, isLoading = false }: MoodInputProps) => {
  const [mood, setMood] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mood.trim()) {
      onGenerate(mood.trim());
    }
  };

  const suggestions = [
    "Rainy night with jazz vibes",
    "Upbeat workout energy",
    "Cozy coffee shop atmosphere",
    "Road trip adventure",
    "Late night study session"
  ];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
          <div className="relative bg-gradient-glass backdrop-blur-glass border border-white/20 rounded-2xl p-6 shadow-card">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="Describe your perfect mood... (e.g., rainy night with jazz vibes)"
                className="pl-12 pr-4 py-6 text-lg bg-transparent border-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/60"
              />
            </div>
            <Button
              type="submit"
              disabled={!mood.trim() || isLoading}
              className="w-full mt-4 bg-gradient-primary hover:shadow-glow text-primary-foreground font-semibold py-6 text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                  Generating Your Playlist...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2" size={20} />
                  Generate Playlist
                </>
              )}
            </Button>
          </div>
        </div>
      </form>

      <div className="space-y-3">
        <p className="text-muted-foreground text-center text-sm">Or try one of these:</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => setMood(suggestion)}
              className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/20 rounded-full text-sm text-foreground transition-all duration-200 hover:scale-105 hover:shadow-neon"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoodInput;