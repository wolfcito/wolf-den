interface NotificationItemProps {
  title: string;
  timestamp: string;
  description?: string;
  accent?: "cyan" | "violet" | "neutral";
}

const accentClass: Record<
  NonNullable<NotificationItemProps["accent"]>,
  string
> = {
  cyan: "border-l-wolf-cyan/70",
  violet: "border-l-wolf-violet/70",
  neutral: "border-l-white/10",
};

export function NotificationItem({
  title,
  timestamp,
  description,
  accent = "neutral",
}: NotificationItemProps) {
  return (
    <div className={`border-l-2 pl-4 ${accentClass[accent]}`}>
      <p className="text-sm font-medium text-wolf-bone">{title}</p>
      {description ? (
        <p className="text-xs text-wolf-bone/60">{description}</p>
      ) : null}
      <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-wolf-bone/40">
        {timestamp}
      </p>
    </div>
  );
}

export default NotificationItem;
