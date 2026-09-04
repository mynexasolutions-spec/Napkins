type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
};

export function SectionTitle({ eyebrow, title, align }: SectionTitleProps) {
  const className = align === "center" ? "section-title center" : "section-title";

  return (
    <div className={className}>
      {eyebrow ? <span>{eyebrow}</span> : null}
      <h2>{title}</h2>
    </div>
  );
}
