"use client";

import { useState } from "react";
import Image from "next/image";

interface OptionalImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function OptionalImage({
  src,
  alt,
  className = "",
  fill = false,
  width,
  height,
  priority = false,
}: OptionalImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) return null;

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      priority={priority}
      onError={() => setHasError(true)}
    />
  );
}
