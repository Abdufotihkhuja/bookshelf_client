import { Suspense, type ReactNode } from "react";

export const ChunkLayout = ({ children }: { children: ReactNode }) => {
  return <Suspense fallback={""}>{children}</Suspense>;
};
