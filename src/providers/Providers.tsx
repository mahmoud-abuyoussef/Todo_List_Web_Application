import { Toaster } from "sonner";

export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Toaster position="top-right" closeButton richColors expand={true} />
      {children}
    </>
  );
}
