import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-indigo-100">
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

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 animate-fade-in">
            How to Use Tailwind CSS: Hands-On Tutorial with Next.js
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up delay-200">
            Follow this step-by-step guide to build and deploy a simple web app using Tailwind CSS in a Next.js project.
          </p>
          <div className="flex justify-center gap-12 flex-wrap animate-slide-up delay-400">
            <img
              src="/images/Tailwind CSS Logo.png"
              alt="Tailwind CSS Logo"
              className="h-20 hover:scale-110 hover:rotate-6 transition-transform duration-500"
            />
            <img
              src="/images/Next.js Logo.jpg"
              alt="Next.js Logo"
              className="h-20 rounded hover:scale-110 hover:-rotate-6 transition-transform duration-500"
            />
          </div>
        </div>

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

        <section id="design-concepts" className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">6. Explore Tailwind Design Concepts & Create Your Own</h2>
          <div className="bg-white rounded-xl shadow-lg p-10">
            <p className="text-gray-700 mb-6">
              Before jumping straight into the final boilerplate, take some time to <strong>experiment and be creative</strong> with Tailwind! Add animations and interactive elements to make your designs feel alive.
            </p>
            <p className="text-gray-700 mb-8">
              Tailwind makes it easy to add smooth transitions, hover effects, focus states, and even keyframe animations.
            </p>

            <h3 className="text-2xl font-semibold mb-8">Interactive & Animated Design Examples</h3>

            <div className="grid md:grid-cols-2 gap-10 mb-12">

              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-600 p-10 text-white shadow-xl hover:shadow-2xl transition-all duration-700">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
                <h4 className="text-2xl font-bold mb-4 relative z-10">Pulsing Gradient Card</h4>
                <p className="mb-6 opacity-90 relative z-10">Hover for a subtle pulse animation.</p>
                <div className="relative z-10 animate-pulse-slow">
                  <div className="bg-white/30 backdrop-blur rounded-xl p-8">
                    <p className="text-lg font-semibold">Feel the rhythm!</p>
                  </div>
                </div>
              </div>

              <div className="h-80 perspective-1000">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                  <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-10 text-white shadow-xl flex flex-col justify-center items-center">
                    <h4 className="text-2xl font-bold mb-4">3D Flip Card</h4>
                    <p>Hover to flip →</p>
                  </div>
                  <div className="absolute inset-0 rotate-y-180 backface-hidden bg-gradient-to-br from-pink-600 to-purple-500 rounded-2xl p-10 text-white shadow-xl flex flex-col justify-center items-center">
                    <h4 className="text-2xl font-bold mb-4">Back Side!</h4>
                    <p className="text-center">Add content, forms, or links here.</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-dashed border-amber-300 rounded-2xl p-10 bg-amber-50">
                <h4 className="text-2xl font-bold mb-6 text-amber-800">Creative Animated Buttons</h4>
                <div className="flex flex-wrap gap-6 justify-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300">
                    Bounce & Glow
                  </button>
                  <button className="px-8 py-4 bg-gray-900 text-white rounded-xl overflow-hidden relative group">
                    <span className="relative z-10">Slide Fill</span>
                    <div className="absolute inset-0 bg-teal-600 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  </button>
                  <button className="px-8 py-4 border-4 border-emerald-600 text-emerald-600 rounded-lg font-bold hover:bg-emerald-600 hover:text-white hover:rotate-3 transition-all duration-400">
                    Fun Rotate
                  </button>
                </div>
              </div>

              <div className="border-2 border-dashed border-indigo-300 rounded-2xl p-10 bg-indigo-50">
                <h4 className="text-2xl font-bold mb-6 text-indigo-800">Staggered Entrance Grid</h4>
                <p className="mb-6 text-indigo-700">Cards animate in one by one on load.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {[1,2,3,4,5,6].map((i) => (
                    <div
                      key={i}
                      className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 animate-fade-in stagger-${i}`}
                    >
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-24 mb-4" />
                      <p className="font-medium text-center">Card {i}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-1 md:col-span-2 border-2 border-dashed border-green-300 rounded-2xl p-10 bg-green-50 flex flex-col items-center justify-center">
                <h4 className="text-2xl font-bold mb-8 text-green-800">Pure CSS Animated Shapes</h4>
                <div className="flex flex-wrap justify-center gap-12 my-10">
                  <div className="w-32 h-32 bg-red-500 rounded-full animate-bounce-slow shadow-lg" />
                  <div className="w-32 h-32 bg-blue-600 animate-spin-slow shadow-lg" />
                  <div className="w-0 h-0 border-l-[64px] border-l-transparent border-r-[64px] border-r-transparent border-b-[112px] border-b-yellow-400 animate-wiggle shadow-lg" />
                </div>
                <p className="text-center text-gray-700 max-w-md">
                  Three animated shapes using only Tailwind’s built-in and custom animations:
                  <br />• Red circle bouncing slowly
                  <br />• Blue square spinning slowly
                  <br />• Yellow triangle wiggling side to side
                </p>
              </div>

            </div>

            <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-8 mt-12">
              <h4 className="text-2xl font-bold text-teal-800 mb-4">Level Up Your Designs!</h4>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Add <code className="bg-gray-200 px-2 py-1 rounded">animate-bounce</code>, <code className="bg-gray-200 px-2 py-1 rounded">animate-ping</code>, or <code className="bg-gray-200 px-2 py-1 rounded">animate-spin</code> for fun effects</li>
                <li>Use <code className="bg-gray-200 px-2 py-1 rounded">group-hover:</code> to trigger child animations on parent hover</li>
                <li>Create custom animations in <code>tailwind.config.js</code> (e.g., fade-in, slide-up)</li>
              </ul>
              <p className="mt-6 text-lg font-medium text-teal-900">
                Experiment directly in your Next.js project and see changes instantly with hot reload!
              </p>
            </div>
          </div>
        </section>

        <section id="add-code" className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">7. Add Your Boilerplate Page</h2>
          <div className="bg-white rounded-xl shadow-lg p-10">
            <p className="text-gray-700 mb-6">After experimenting with designs and animations, copy the provided <code>page.js</code> or <code>page.tsx</code> code from the activity materials and paste it into:</p>
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto mb-8">
              <code>app/page.js or app/page.tsx</code>
            </pre>
            <p className="text-gray-700 mb-8">This will replace the default page with your Tailwind CSS showcase.</p>
            <p className="text-gray-700 font-medium text-teal-700">
              Feel free to incorporate any animations or interactive ideas you liked above!
            </p>
            <h3 className="text-2xl font-semibold mt-12 mb-4">8. Push Your Updates to GitHub</h3>
            <p className="text-gray-700 mb-6">In GitHub Desktop:</p>
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              <li>Stage all changes</li>
              <li>Write a commit message (e.g., "Add animated Tailwind demo with custom effects")</li>
              <li>Click Commit and then Push</li>
            </ul>
          </div>
        </section>

        <section id="run-local" className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">9. Run the Web App Locally</h2>
          <div className="bg-white rounded-xl shadow-lg p-10">
            <p className="text-gray-700 mb-6">Start the development server:</p>
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto mb-8">
              <code>npm run dev</code>
            </pre>
            <p className="text-gray-700">Open your browser and go to:</p>
            <p className="text-2xl font-mono bg-gray-200 inline-block px-4 py-2 rounded mt-4">
              http://localhost:3000
            </p>
            <p className="text-gray-700 mt-6">You should now see your Tailwind-styled page with smooth animations!</p>
          </div>
        </section>

        <section id="deploy" className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">10. Deploy to Vercel</h2>
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

      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xl">Tutorial by Marcus Amahan</p>
          <p className="text-gray-400 mt-2">Built with Next.js & Tailwind CSS • December 19, 2025</p>
        </div>
      </footer>
    </div>
  );
}
