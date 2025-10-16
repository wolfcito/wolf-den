import type { CSSProperties } from "react";

type BounceLoaderProps = {
  loading?: boolean;
  size?: number;
  color?: string;
};

function createCircleStyle(
  size: number,
  color: string,
  delay: number,
): CSSProperties {
  return {
    width: size,
    height: size,
    borderRadius: "50%",
    backgroundColor: color,
    opacity: 0.7,
    animation: `selfBounceLoader 1.4s ease-in-out ${delay}s infinite`,
  };
}

const bounceKeyframes = `
@keyframes selfBounceLoader {
  0%, 100% {
    transform: scale(0.6);
    opacity: 0.5;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
}
`;

function ensureKeyframesMounted() {
  if (typeof document === "undefined") {
    return;
  }

  const styleId = "self-bounce-loader-keyframes";
  if (document.getElementById(styleId)) {
    return;
  }

  const style = document.createElement("style");
  style.id = styleId;
  style.appendChild(document.createTextNode(bounceKeyframes));
  document.head.appendChild(style);
}

export function BounceLoader({
  loading = true,
  size = 120,
  color = "#94FBAB",
}: BounceLoaderProps) {
  if (!loading) {
    return null;
  }

  ensureKeyframesMounted();

  const circleSize = size * 0.4;
  const gap = size * 0.1;

  const containerStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap,
  };

  return (
    <div style={containerStyle} aria-busy aria-live="polite">
      <span style={createCircleStyle(circleSize, color, 0)} />
      <span style={createCircleStyle(circleSize, color, 0.3)} />
      <span style={createCircleStyle(circleSize, color, 0.6)} />
    </div>
  );
}

export default { BounceLoader };
