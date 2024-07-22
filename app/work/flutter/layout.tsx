export default function FlutterLayout({ children, }: { children: React.ReactNode }) {
    return <section className="flex justify-center items-start h-full bg-background">{children}</section>
}