import Sidebar from "@/components/Sidebar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedId: User = {
    $id: "",
    email: "",
    userId: "",
    dwollaCustomerUrl: "",
    firstName: "Tamer",
    lastName: "Osman",
    dwollaCustomerId: "",
    address1: "",
    city: "",
    state: "",
    postalCode: "",
    dateOfBirth: "",
    ssn: ""
  };
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedId}/>
        {children}
    </main>
  );
}
