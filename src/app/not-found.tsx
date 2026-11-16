import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-xl flex-col items-center justify-center px-5 text-center">
      <Logo className="h-12 w-auto" />
      <p className="mt-8 font-mono text-sm text-muted-foreground">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">This page doesn&apos;t exist.</h1>
      <p className="mt-3 text-muted-foreground">The link may be broken or the page was moved.</p>
      <Link href="/" className="mt-8 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background">
        Back home
      </Link>
    </section>
  );
}
