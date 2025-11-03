import React from 'react';

const InfoPanel: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mt-12 p-6 bg-emerald-50/70 border border-emerald-200 rounded-2xl text-gray-700 backdrop-blur-sm">
        <h4 className="text-xl font-bold text-emerald-800 mb-2">🚀 Deploying Your App (With Mobile Fix!)</h4>
        <p className="mb-4 text-gray-600">
            Great job deploying! The "blank screen on mobile" is a common issue. It happens because some mobile browsers don't support the ultra-modern JavaScript that Vite uses for speed. I've now added a **compatibility plugin** to fix this.
        </p>

        <div className="space-y-6 text-sm md:text-base">
            <ol className="list-decimal list-inside space-y-4">
                <li>
                    <strong>Step 1: Go Into Your Project Folder</strong>
                    <p className="ml-5 mt-1 text-gray-600">
                        This is the most important step! Make sure your terminal is "inside" your project folder before running any commands. From your screenshot, it looks like your folder is named `Smart_Recipe`.
                    </p>
                    <p className="ml-5 mt-2 font-mono text-gray-800 bg-gray-200 p-3 rounded-lg">
                        <span className="font-bold text-emerald-700">$ cd Smart_Recipe</span>
                        <span className="text-gray-500 italic block mt-1"> (Or whatever you named your project folder)</span>
                    </p>
                </li>
                <li>
                    <strong>Step 2: Install Dependencies</strong>
                    <p className="ml-5 mt-1 text-gray-600">
                        This command downloads all the necessary tools for your project, including the new mobile compatibility fix.
                    </p>
                    <p className="ml-5 mt-2 font-mono text-gray-800 bg-gray-200 p-3 rounded-lg">
                        <span className="font-bold text-emerald-700">$ npm install</span>
                    </p>
                </li>
                <li>
                    <strong>Step 3: Deploy to the Web!</strong>
                    <p className="ml-5 mt-1 text-gray-600">
                        Now, run the deploy command. This will build your app and send it to your GitHub Pages site.
                    </p>
                    <p className="ml-5 mt-2 font-mono text-gray-800 bg-gray-200 p-3 rounded-lg">
                       <span className="font-bold text-emerald-700">$ npm run deploy</span>
                    </p>
                </li>
                <li>
                    <strong>Step 4: Check Your Live Site</strong>
                     <p className="ml-5 mt-1 text-gray-600">
                        Go to your live URL again on your mobile phone. <strong className="text-orange-600">Important:</strong> You might need to clear your mobile browser's cache to see the latest update!
                     </p>
                     <ul className="ml-9 mt-2 list-disc list-outside space-y-1 text-gray-700">
                        <li>The URL is the same: <br/><strong className="text-emerald-700">https://udaymisra.github.io/Recipe_Smart_Genie/</strong></li>
                        <li>This new version should now load perfectly on your phone.</li>
                     </ul>
                </li>
            </ol>
        </div>

        <div className="mt-8 p-4 bg-blue-50/80 border border-blue-200 rounded-xl">
          <h5 className="font-bold text-blue-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            A Quick Note on Terminal Messages
          </h5>
          <p className="mt-2 text-sm text-blue-700">
            After running <code className="bg-blue-200 text-blue-800 px-1 rounded">npm install</code>, you saw messages about <strong className="font-semibold">"deprecated"</strong> packages and <strong className="font-semibold">"vulnerabilities"</strong>.
          </p>
          <ul className="mt-2 list-disc list-inside text-sm text-blue-700 space-y-1">
            <li><strong>This is completely normal and your installation was successful!</strong> These are not errors.</li>
            <li>A <strong className="font-semibold">"deprecated"</strong> warning is just a note that a package is old.</li>
            <li><strong className="font-semibold">"Vulnerabilities"</strong> are common security advisories.</li>
            <li>You can safely proceed to the next step: <code className="bg-blue-200 text-blue-800 px-1 rounded">npm run deploy</code>.</li>
          </ul>
        </div>
    </div>
  );
};

export default InfoPanel;