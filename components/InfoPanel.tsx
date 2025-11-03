import React from 'react';

const InfoPanel: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mt-12 p-6 bg-emerald-50/70 border border-emerald-200 rounded-2xl text-gray-700 backdrop-blur-sm">
        <h4 className="text-xl font-bold text-emerald-800 mb-2">🚀 Final Fix: Making Your App Bulletproof</h4>
        <p className="mb-4 text-gray-600">
            I am very sorry the last fix didn't work. I've found the real root of the problem: the app was using a very new feature ("import maps") to load its code that many mobile browsers don't support yet. I've now changed it to a more standard, reliable method. This should fix the blank screen for good!
        </p>

        <div className="space-y-6 text-sm md:text-base">
            <ol className="list-decimal list-inside space-y-4">
                <li>
                    <strong>Step 1: Install Updated Dependencies</strong>
                    <p className="ml-5 mt-1 text-gray-600">
                        In your terminal (inside the `Smart_Recipe` folder), please run this command again. It will set up the new, more reliable code loading method.
                    </p>
                    <p className="ml-5 mt-2 font-mono text-gray-800 bg-gray-200 p-3 rounded-lg">
                        <span className="font-bold text-emerald-700">$ npm install</span>
                    </p>
                </li>
                <li>
                    <strong>Step 2: Re-Deploy to the Web</strong>
                    <p className="ml-5 mt-1 text-gray-600">
                        Once the installation is complete, run the deploy command one last time. This will send the fully-fixed version of your app to your live URL.
                    </p>
                    <p className="ml-5 mt-2 font-mono text-gray-800 bg-gray-200 p-3 rounded-lg">
                       <span className="font-bold text-emerald-700">$ npm run deploy</span>
                    </p>
                </li>
            </ol>
        </div>

        <div className="mt-8 p-4 bg-orange-50/80 border border-orange-200 rounded-xl">
          <h5 className="font-bold text-orange-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.21 3.03-1.742 3.03H4.42c-1.532 0-2.492-1.696-1.742-3.03l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-8a1 1 0 00-1 1v3a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            CRITICAL STEP: Clear Your Mobile Browser Cache!
          </h5>
          <p className="mt-2 text-sm text-orange-700">
            Your phone has likely saved the old, broken version of the site. You <strong className="font-semibold">must</strong> clear the cache to see the fix.
          </p>
          <ul className="mt-3 list-disc list-inside text-sm text-orange-700 space-y-2">
            <li>
                <strong>On Chrome (Android/iOS):</strong> Go to your site. Tap the three dots (menu) &#8594; History &#8594; Clear browsing data. Check "Cached images and files" and tap "Clear data".
            </li>
            <li>
                <strong>On Safari (iOS):</strong> Go to Settings &#8594; Safari &#8594; Advanced &#8594; Website Data. Find your site in the list, swipe left, and tap "Delete". Or, to clear everything, go to Settings &#8594; Safari &#8594; "Clear History and Website Data".
            </li>
          </ul>
           <p className="mt-3 text-sm text-orange-700 font-semibold">
            After clearing the cache, revisit your URL: <br/><strong className="text-emerald-700">https://udaymisra.github.io/Recipe_Smart_Genie/</strong>. It should now load correctly!
           </p>
        </div>
    </div>
  );
};

export default InfoPanel;