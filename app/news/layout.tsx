export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="px-2 py-4 prose prose-zinc dark:prose-invert max-w-full prose-code:after:hidden prose-code:before:hidden">
      {children}
    </main>
  );
}
