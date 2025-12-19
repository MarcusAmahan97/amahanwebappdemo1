import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-indigo-100">
      {/* Navigation Menu */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-teal-600">Tailwind CSS Tutorial</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#intro" className="text-gray-700 hover:text-teal-600 transition">Introduction</a>
              <a href="#setup-repo" className="text-gray-700 hover:text-teal-600 transition">Setup Repository</a>
              <a href="#create-project" className="text-gray-700 hover:text-teal-600 transition">Create Next.js Project</a>
              <a href="#add-code" className="text-gray-700 hover:text-teal-600 transition">Add Your Page</a>
              <a href="#run-local" className="text-gray-700 hover:text-teal-600 transition">Run Locally</a>
              <a href="#deploy" className="text-gray-700 hover:text-teal-600 transition">Deploy to Vercel</a>
            </div>
            <button className="md:hidden">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            How to Use Tailwind CSS: Hands-On Tutorial with Next.js
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Follow this step-by-step guide to build and deploy a simple web app using Tailwind CSS in a Next.js project.
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <img 
              src="/images/Tailwind CSS Logo.png"
              alt="Tailwind CSS Logo" 
              className="h-16"
            />
            <img 
              src="/images/Next.js Logo.jpg" 
              alt="Next.js Logo" 
              className="h-16 rounded"
            />
          </div>
        </div>

        {/* Introduction Section */}
        <section id="intro" className="mb-20 mt-12">
          <div className="bg-white rounded-xl shadow-lg p-10 prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              In this tutorial, we'll create a Next.js application styled with <strong>Tailwind CSS</strong>, a utility-first CSS framework that allows rapid UI development directly in your markup.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We'll cover setting up a GitHub repository, creating the project, adding custom components, running it locally, and deploying to Vercel.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Starter files and boilerplate are available from: <a href="https://github.com/MarcusAmahan97/amahan-webapp-demo1" className="text-teal-600 hover:underline">https://github.com/MarcusAmahan97/amahan-webapp-demo1</a>
            </p>
          </div>
        </section>

        {/* Setup Repository */}
        <section id="setup-repo" className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">1. Create a GitHub Repository</h2>
          <div className="bg-white rounded-xl shadow-lg p-10">
            <ol className="list-decimal pl-6 space-y-6 text-gray-700">
              <li>Open <strong>GitHub Desktop</strong> and sign in to your account.</li>
              <li>Create a new repository named: <code className="bg-gray-200 px-2 py-1 rounded">lastname-webapp-demo</code> (replace "lastname" with your actual last name).</li>
              <li>Publish the repository to GitHub.</li>
            </ol>

            <h3 className="text-2xl font-semibold mt-12 mb-4">2. Open the Project in VS Code</h3>
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              <li>In GitHub Desktop → Click "Open in Visual Studio Code".</li>
              <li>In VS Code → Right-click on the project panel and select "Open in Integrated Terminal".</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-12 mb-4">3. Verify Installed Tools</h3>
            <p className="text-gray-700 mb-4">Run these commands in the terminal:</p>
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
              <code>node -v<br />npm -v<br />git -v</code>
            </pre>
            <p className="text-gray-700 mt-4">You should see version numbers displayed.</p>

            <p className="text-gray-700 mt-8">Optional: Download starter materials from the provided GitHub link above.</p>
          </div>
        </section>

        {/* Create Next.js Project */}
        <section id="create-project" className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">5. Create a New Next.js Project</h2>
          <div className="bg-white rounded-xl shadow-lg p-10">
            <p className="text-gray-700 mb-6">Run this command inside your project folder:</p>
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto mb-8">
              <code>npx create-next-app@latest .</code>
            </pre>
            <p className="text-gray-700 mb-6">
              When prompted:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
              <li>Choose <strong>Yes</strong> for TypeScript (recommended)</li>
              <li>Choose <strong>Yes</strong> for ESLint</li>
              <li>Choose <strong>Yes</strong> for Tailwind CSS</li>
              <li>Choose <strong>Yes</strong> for App Router</li>
              <li>Choose <strong>No</strong> for src/ directory (unless preferred)</li>
            </ul>
            <p className="text-gray-700">This automatically sets up Tailwind CSS for you.</p>
          </div>
        </section>

        {/* Add Boilerplate */}
        <section id="add-code" className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">6. Add Your Boilerplate Page</h2>
          <div className="bg-white rounded-xl shadow-lg p-10">
            <p className="text-gray-700 mb-6">Copy the provided <code>page.js</code> or <code>page.tsx</code> code from the activity materials and paste it into:</p>
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto mb-8">
              <code>app/page.js or app/page.tsx</code>
            </pre>
            <p className="text-gray-700 mb-8">This will replace the default page with your Tailwind CSS showcase.</p>

            <h3 className="text-2xl font-semibold mt-12 mb-4">8. Push Your Updates to GitHub</h3>
            <p className="text-gray-700 mb-6">In GitHub Desktop:</p>
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              <li>Stage all changes</li>
              <li>Write a commit message (e.g., "Add Tailwind demo page")</li>
              <li>Click Commit and then Push</li>
            </ul>
          </div>
        </section>

        {/* Run Locally */}
        <section id="run-local" className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">7. Run the Web App Locally</h2>
          <div className="bg-white rounded-xl shadow-lg p-10">
            <p className="text-gray-700 mb-6">Start the development server:</p>
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto mb-8">
              <code>npm run dev</code>
            </pre>
            <p className="text-gray-700">Open your browser and go to:</p>
            <p className="text-2xl font-mono bg-gray-200 inline-block px-4 py-2 rounded mt-4">
              http://localhost:3000
            </p>
            <p className="text-gray-700 mt-6">You should now see your Tailwind-styled page!</p>
          </div>
        </section>

        {/* Deploy to Vercel */}
        <section id="deploy" className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">9. Deploy to Vercel</h2>
          <div className="bg-white rounded-xl shadow-lg p-10">
            <ol className="list-decimal pl-6 space-y-6 text-gray-700">
              <li>Go to <a href="https://vercel.com" className="text-teal-600 hover:underline">https://vercel.com</a></li>
              <li>Sign in with your GitHub account</li>
              <li>Click "New Project"</li>
              <li>Select your <code>lastname-webapp-demo</code> repository</li>
              <li>Click "Deploy" (Vercel auto-detects Next.js)</li>
            </ol>
            <p className="text-gray-700 mt-8">Once deployed, you'll get a live URL (e.g., your-project.vercel.app). Share it!</p>
            <div className="mt-8 flex justify-center">
              <img 
                src="https://vercel.com/button" 
                alt="Deploy with Vercel" 
                className="h-12"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xl">Tutorial by Marcus Amahan</p>
          <p className="text-gray-400 mt-2">Built with Next.js & Tailwind CSS • December 19, 2025</p>
        </div>
      </footer>
    </div>
  );
}