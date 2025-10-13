



const Project1 = () => {
  return (
    <div className="min-h-screen w-screen bg-purple-200 text-purple-900 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-12">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
        TvaaS Project (Web App)
      </h1>

      {/* Quick Summary */}
      <section className="max-w-4xl text-center mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Quick Summary</h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-purple-700">
          NAYATEL real time project modules
        </p>
      </section>

      {/* Implementation / My Work */}
      <section className="max-w-4xl text-left mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Implementation / My Work</h2>

        <ul className="list-disc list-inside space-y-4 text-sm sm:text-base text-purple-700">
          <li>
            <strong>Movie Submission Form:</strong> A responsive movie submission form built with Next.js, TypeScript, and shadcn/ui.
          </li>
          <li>
            <strong>Billing Header with Dual Search:</strong> A billing form header with dual search fields using Next.js, TypeScript, and shadcn/ui.
          </li>
          <li>
            <strong>VOD Movie Filter Form:</strong> A filter form to search VOD movies efficiently using Next.js, TypeScript, and shadcn/ui.
          </li>
          <li>
            <strong>Live Movie Filter Form:</strong> A filter form for browsing live movies, built with Next.js, TypeScript, and shadcn/ui.
          </li>
          <li>
            <strong>Sidebar Navigation:</strong> A sidebar navigation for VOD and Live movie forms, developed using Next.js and shadcn/ui.
          </li>
          <li>
            <strong>VOD Updates Panel:</strong> A real-time VOD updates panel with RTK Query integration, built using Next.js and shadcn/ui.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Project1;