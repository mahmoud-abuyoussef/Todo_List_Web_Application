export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="auth-layout bg-main-color flex min-h-screen items-center justify-center p-5">{children}</div>;
}
