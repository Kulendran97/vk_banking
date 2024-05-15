import Sidebar from "@/components/ui/Sidebar";

export const dynamic = "force-dynamic";

const loggeduser = ["vinoth"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Sidebar />
      {children}
    </main>
  );
}
