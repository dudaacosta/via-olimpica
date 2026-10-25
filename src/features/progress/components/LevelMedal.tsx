import type { ProgressLevel } from "../levels";

export function LevelMedal({ level, className = "" }: { level: ProgressLevel; className?: string }) {
  if (!level.imageSrc) return null;
  const crop = level.imageCrop;
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: crop ? `${crop.width} / 533` : "1 / 1" }}
    >
      <img
        src={level.imageSrc}
        alt={level.imageAlt}
        width={1600}
        height={533}
        className="absolute top-0 h-full max-w-none"
        style={{
          width: crop ? `${(1600 / crop.width) * 100}%` : "100%",
          left: crop ? `${(-crop.x / crop.width) * 100}%` : 0,
        }}
      />
    </div>
  );
}
