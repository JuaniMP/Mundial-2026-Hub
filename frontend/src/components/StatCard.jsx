const StatCard = ({ title, value, subtitle, icon: Icon, progress, color = "primary" }) => {
  const colorClass = color === "primary" ? "bg-primary" : "bg-tertiary";
  const textColor = color === "primary" ? "text-primary" : "text-tertiary";

  return (
    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/15">
      <div className="flex items-center gap-3 mb-4">
        {Icon && <Icon className="text-secondary" size={24} />}
        <h3 className="font-headline text-lg font-bold text-on-surface">{title}</h3>
      </div>
      <p className={`font-headline text-4xl font-extrabold ${textColor} mb-2`}>{value}</p>
      {progress !== undefined && (
        <div className="w-full bg-surface-variant rounded-full h-2 mb-2 overflow-hidden">
          <div className={`${colorClass} h-2 rounded-full`} style={{ width: `${progress}%` }}></div>
        </div>
      )}
      <p className="font-label text-xs text-secondary uppercase tracking-wider">{subtitle}</p>
    </div>
  );
};

export default StatCard;
