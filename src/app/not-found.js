export const metadata = {
  title: "503 | Service Temporarily Unavailable",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-6 py-16 text-white">
      <div className="max-w-2xl rounded-2xl border border-red-500/30 bg-black/20 p-8 text-center shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">503 — Service Temporarily Unavailable</p>

        <p className="mt-6 text-base leading-7 text-gray-200">
          This deployment endpoint is currently unavailable due to a temporary hosting configuration or resource limitation.
        </p>

        <p className="mt-4 text-base leading-7 text-gray-300">
          Please try again later. If the issue persists, the deployment may require additional hosting resources or configuration changes.
        </p>

        <div className="mt-8 text-left rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-sm text-red-200">
          <span className="font-semibold">Error ID:</span>{" "}
          <code className="rounded bg-black/20 px-2 py-1 text-red-100">VERCEL_DEPLOYMENT_UNAVAILABLE</code>
        </div>
      </div>
    </main>
  );
}
