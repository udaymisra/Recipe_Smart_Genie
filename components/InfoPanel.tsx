import React from 'react';

const InfoPanel: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mt-12 p-6 bg-emerald-50/70 border border-emerald-200 rounded-2xl text-gray-700 backdrop-blur-sm">
        <h4 className="text-xl font-bold text-emerald-800 mb-2">🚀 Make Your App Live for the World!</h4>
        <p className="mb-4 text-gray-600">
            You are right! The local development server is only for testing on your own network and can be unreliable. To get a permanent, public URL that you can share with anyone and use on any device, you need to **deploy** your app. Here’s the standard 3-step process:
        </p>

        <div className="space-y-4 text-sm md:text-base">
            <ol className="list-decimal list-inside space-y-4">
                <li>
                    <strong>Step 1: Build the Project</strong>
                    <p className="ml-5 mt-1 text-gray-600">
                        Your app is written in TypeScript and React. To make it ready for the web, you need to "build" it. This process compiles and optimizes your code into a set of static HTML, CSS, and JavaScript files that any browser can understand.
                    </p>
                    <p className="ml-5 mt-2 font-mono text-gray-800 bg-gray-200 p-3 rounded-lg">
                        # In your project's terminal, run this command:
                        <br />
                        <span className="font-bold text-emerald-700">$ npm run build</span>
                    </p>
                    <p className="ml-5 mt-2 text-gray-600">
                        This will create a new folder named <code className="text-sm bg-gray-200 p-1 rounded">dist</code> in your project. This folder contains the final, production-ready version of your app.
                    </p>
                </li>
                <li>
                    <strong>Step 2: Choose a Free Hosting Provider</strong>
                    <p className="ml-5 mt-1 text-gray-600">
                        Many services can host your static app for free. They take your <code className="text-sm bg-gray-200 p-1 rounded">dist</code> folder and publish it to the internet. Great options include:
                    </p>
                     <ul className="ml-9 mt-2 list-disc list-outside space-y-1 text-gray-700">
                        <li><strong>Netlify:</strong> Incredibly popular and easy to use. Often just a drag-and-drop.</li>
                        <li><strong>Vercel:</strong> Another excellent, fast, and user-friendly option.</li>
                        <li><strong>GitHub Pages:</strong> A great choice if your code is already on GitHub.</li>
                     </ul>
                </li>
                <li>
                    <strong>Step 3: Deploy Your App</strong>
                     <p className="ml-5 mt-1 text-gray-600">
                        Sign up for one of the services above. Most of them have a simple process:
                     </p>
                     <p className="ml-5 mt-2 font-semibold text-emerald-700 text-center bg-emerald-100 p-3 rounded-lg">
                        Drag and drop your entire <code className="text-lg">dist</code> folder onto their deployment page.
                     </p>
                     <p className="ml-5 mt-2 text-gray-600">
                        The service will upload your files and give you a public URL (like <code className="text-sm bg-gray-200 p-1 rounded">your-recipe-genie.netlify.app</code>). This URL will work on your phone, your friend's computer, and anywhere in the world!
                     </p>
                </li>
            </ol>
        </div>
    </div>
  );
};

export default InfoPanel;