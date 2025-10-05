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
  cyan: "border-l-[#447bff]",
  violet: "border-l-[#0b1320]",
  neutral: "border-l-[#d1d7eb]",
};

export function NotificationItem({
  title,
  timestamp,
  description,
  accent = "neutral",
}: NotificationItemProps) {
  return (
    <div className={`border-l-2 pl-4 ${accentClass[accent]}`}>
      <p className="text-sm font-medium text-[#0f1621]">{title}</p>
      {description ? (
        <p className="text-xs text-[#44506b]">{description}</p>
      ) : null}
      <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-[#9aa5c3]">
        {timestamp}
      </p>
    </div>
  );
}

export default NotificationItem;
