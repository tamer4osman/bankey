import Sidebar from "@/components/Sidebar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedId={firstName: "Tamer", LastName: "Osman"}
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedId}/>
        {children}
    </main>
  );
}
