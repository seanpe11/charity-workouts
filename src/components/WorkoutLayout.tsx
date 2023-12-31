import NavbarMobile from "~/components/ui/NavbarMobile"

export default function WorkoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>
    <NavbarMobile/>
    <main className="min-h-screen bg-background">
     {children}
    </main>
  </>
}
