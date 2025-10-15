"use client";

import { useEffect } from "react";

interface LocaleLangSetterProps {
  locale: string;
}

export function LocaleLangSetter({ locale }: LocaleLangSetterProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}

export default LocaleLangSetter;
