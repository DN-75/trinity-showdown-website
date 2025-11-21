import { Card } from "./ui/card";

interface TeamCardProps {
  teamName: string;
  game: string;
  logoUrl?: string;
}

const TeamCard = ({ teamName, game, logoUrl }: TeamCardProps) => {
  return (
    <Card className="p-6 border-primary/20 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 min-h-[200px] flex flex-col items-center justify-center">
      {logoUrl && (
        <div className="mb-4">
          <img
            src={logoUrl}
            alt={`${teamName} logo`}
            className="w-20 h-20 object-cover rounded-full border-2 border-primary/30"
            onError={(e) => {
              // Fallback if image fails to load
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      )}
      <h4 className="font-heading font-bold text-primary text-lg text-center mb-2">
        {teamName}
      </h4>
      <p className="text-sm text-muted-foreground text-center">{game}</p>
    </Card>
  );
};

export default TeamCard;

