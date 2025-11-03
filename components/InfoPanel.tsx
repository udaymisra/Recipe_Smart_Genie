import React from 'react';

const InfoPanel: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mt-12 p-6 bg-emerald-50/70 border border-emerald-200 rounded-2xl text-gray-700 backdrop-blur-sm">
        <h4 className="text-xl font-bold text-emerald-800 mb-2">🚀 Let's Deploy Your App to GitHub Pages!</h4>
        <p className="mb-4 text-gray-600">
            You're at the final step! Since your code is already on GitHub, we can use a free service called **GitHub Pages** to make your app live. I've added the necessary configuration files for you. Just run the commands below.
        </p>

        <div className="space-y-6 text-sm md:text-base">
            <div>
                <h5 className="font-semibold text-gray-800">Background: What I Just Added</h5>
                <p className="ml-5 mt-1 text-gray-600">
                    I added a <code className="text-sm bg-gray-200 p-1 rounded">package.json</code> to manage your project's tools and a <code className="text-sm bg-gray-200 p-1 rounded">vite.config.ts</code> to configure the build process specifically for GitHub. Now, you just need to run two commands.
                </p>
            </div>
            <ol className="list-decimal list-inside space-y-4">
                <li>
                    <strong>Step 1: Install Dependencies</strong>
                    <p className="ml-5 mt-1 text-gray-600">
                        This command reads your new `package.json` file and downloads the tools needed to build and deploy your app, including the `gh-pages` deployment utility.
                    </p>
                    <p className="ml-5 mt-2 font-mono text-gray-800 bg-gray-200 p-3 rounded-lg">
                        <span className="font-bold text-emerald-700">$ npm install</span>
                    </p>
                </li>
                <li>
                    <strong>Step 2: Deploy to GitHub!</strong>
                    <p className="ml-5 mt-1 text-gray-600">
                        This single command will first build your project into a production-ready <code className="text-sm bg-gray-200 p-1 rounded">dist</code> folder, and then it will automatically push that folder to a special `gh-pages` branch on your GitHub repository, which activates the website.
                    </p>
                    <p className="ml-5 mt-2 font-mono text-gray-800 bg-gray-200 p-3 rounded-lg">
                       <span className="font-bold text-emerald-700">$ npm run deploy</span>
                    </p>
                </li>
                <li>
                    <strong>Step 3: Find Your Live Website URL</strong>
                     <p className="ml-5 mt-1 text-gray-600">
                        After the deploy command finishes, wait about a minute for GitHub to update. Then, find your live URL:
                     </p>
                     <ul className="ml-9 mt-2 list-disc list-outside space-y-1 text-gray-700">
                        <li>Go to your <code className="text-sm bg-gray-200 p-1 rounded">Recipe_Smart_Genie</code> repository on GitHub.</li>
                        <li>Click the <strong>Settings</strong> tab.</li>
                        <li>In the left sidebar, click on <strong>Pages</strong>.</li>
                        <li>You will see a green box with your live site URL. It will look like this: <br/><strong className="text-emerald-700">https://udaymisra.github.io/Recipe_Smart_Genie/</strong></li>
                     </ul>
                </li>
            </ol>
        </div>
    </div>
  );
};

export default InfoPanel;