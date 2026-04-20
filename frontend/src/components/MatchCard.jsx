const MatchCard = ({ match }) => {
  return (
    <div className="w-full md:w-auto glass-panel p-6 rounded-xl border border-outline-variant/15 shadow-[0_8px_32px_rgba(27,29,14,0.08)]">
      <div className="flex justify-between items-center mb-6">
        <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold">
          Matchday {match.matchday} • {match.groupName}
        </span>
        <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">
          {new Date(match.matchDate).toLocaleDateString()}
        </span>
      </div>
      <div className="flex items-center justify-between gap-8 mb-6">
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center shadow-inner overflow-hidden border-2 border-primary/20">
             <span className="font-headline font-bold text-lg">{match.team1.substring(0, 3).toUpperCase()}</span>
          </div>
          <span className="font-headline font-bold text-xl tracking-tight text-primary">{match.team1}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-headline text-3xl font-black text-on-background">VS</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center shadow-inner overflow-hidden border-2 border-secondary/20">
            <span className="font-headline font-bold text-lg">{match.team2.substring(0, 3).toUpperCase()}</span>
          </div>
          <span className="font-headline font-bold text-xl tracking-tight text-secondary">{match.team2}</span>
        </div>
      </div>
      <button className="w-full bg-primary text-on-primary font-headline font-bold py-3 rounded-md hover:bg-primary-container transition-colors duration-200">
        View Match Details
      </button>
    </div>
  );
};

export default MatchCard;
