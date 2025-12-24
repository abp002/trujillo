import type { ReactNode } from "react";

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ demoId: string }>;
}) {
  const { demoId } = await params;

  return (
    <div>
      {children}
    </div>
  );
}
