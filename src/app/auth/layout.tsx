export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="bg-main-color flex min-h-screen items-center justify-center bg-[url(/images/auth-background.webp)] p-5">{children}</div>;
}
