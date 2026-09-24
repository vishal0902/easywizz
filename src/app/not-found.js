import Link from "next/link";

export const metadata = {
  title: "404 | Not Found",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-6 py-16 text-white">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">Error 404</p>
        <h1 className="mt-4 text-4xl font-bold">Page not found</h1>
        <p className="mt-4 text-gray-300">
          The page you are looking for does not exist or is not available on this domain.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-red-600 px-5 py-3 font-medium text-white transition hover:bg-red-500"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}
