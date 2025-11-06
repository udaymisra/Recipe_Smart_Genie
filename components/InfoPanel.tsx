import React from 'react';

const InfoPanel: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mt-12 mb-8 p-6 bg-emerald-50/70 border border-emerald-200 rounded-2xl text-gray-700 backdrop-blur-sm">
      <h4 className="text-xl font-bold text-emerald-800 mb-3">🚀 Your Mobile Deployment Guide</h4>
      <p className="mb-6 text-gray-600">
        Your app is already a **Progressive Web App (PWA)**, which is fantastic! Here’s your complete guide to getting it onto users' phones, from a simple home screen install to a full Google Play Store release.
      </p>

      <div className="space-y-8 text-sm md:text-base">
        {/* Phase 1: PWA */}
        <div>
          <h5 className="font-bold text-lg text-emerald-700 mb-2">Phase 1: PWA Installation (The Easy Way)</h5>
          <p className="ml-5 mb-3 text-gray-600">
            This allows anyone to "install" your app on their phone's home screen directly from their browser.
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-5">
            <li>
              <strong>Deploy Your App:</strong> Make sure you've run <code className="bg-gray-200 p-1 rounded">npm run deploy</code> to publish the latest version.
            </li>
            <li>
              <strong>Open on Mobile:</strong> Visit your app's URL on a mobile phone (Chrome on Android or Safari on iOS).
            </li>
            <li>
              <strong>Install:</strong> The browser will show a prompt or an option in its menu (e.g., Share icon or ⋮ menu) to <strong className="font-semibold">"Install app"</strong> or <strong className="font-semibold">"Add to Home Screen"</strong>.
            </li>
            <li>
              <strong>Launch!</strong> The app icon will appear on the home screen and launch just like a native app.
            </li>
          </ol>
        </div>

        {/* Phase 2: Play Store */}
        <div>
           <h5 className="font-bold text-lg text-orange-800 mb-2">Phase 2: Publish to the Google Play Store (Advanced)</h5>
           <p className="ml-5 mb-3 text-gray-600">
            To get your app on the Play Store, we'll use a tool called **Capacitor** to wrap your web code in a native Android package. Follow these terminal commands from your project's root directory.
          </p>
          <ol className="list-decimal list-inside space-y-6 ml-5">
              <li>
                <strong className="block mb-1">Install Capacitor:</strong>
                <p className="mb-2">First, add Capacitor's command-line tool and core libraries to your project.</p>
                <code className="block bg-gray-800 text-white p-2 rounded text-xs">npm install @capacitor/cli @capacitor/core @capacitor/android</code>
              </li>
               <li>
                <strong className="block mb-1">Initialize Capacitor:</strong>
                 <p className="mb-2">This command creates a configuration file and sets up your project for Capacitor.</p>
                <code className="block bg-gray-800 text-white p-2 rounded text-xs">npx cap init</code>
                 <p className="mt-2 text-xs text-gray-500">You'll be asked for an App Name (e.g., Recipe Genie) and a Package ID. The ID is important and must be unique, formatted like <code className="bg-gray-200 p-1 rounded">com.companyname.appname</code>.</p>
              </li>
              <li>
                <strong className="block mb-1">Add the Android Platform:</strong>
                <p className="mb-2">This creates a native Android project inside your app, which will contain your web code.</p>
                <code className="block bg-gray-800 text-white p-2 rounded text-xs">npx cap add android</code>
              </li>
              <li>
                <strong className="block mb-1">Build & Sync Your Web App:</strong>
                <p className="mb-2">First, create a fresh production build of your React app. Then, sync these files into the native Android project.</p>
                <code className="block bg-gray-800 text-white p-2 rounded text-xs mb-1">npm run build</code>
                <code className="block bg-gray-800 text-white p-2 rounded text-xs">npx cap sync</code>
              </li>
               <li>
                <strong className="block mb-1">Open in Android Studio:</strong>
                 <p className="mb-2">Capacitor will now open your new native project in Android Studio (you'll need to have it installed).</p>
                <code className="block bg-gray-800 text-white p-2 rounded text-xs">npx cap open android</code>
              </li>
               <li>
                <strong className="block mb-1">Build Your App Bundle (.aab):</strong>
                <p className="mb-2">Inside Android Studio, you need to generate a signed app bundle, which is the file you'll upload to the Play Store.</p>
                 <ul className="list-disc list-inside space-y-1 pl-4 text-xs">
                    <li>Go to <code className="bg-gray-200 p-1 rounded">Build &gt; Generate Signed Bundle / APK...</code></li>
                    <li>Select <strong className="font-semibold">Android App Bundle</strong> and click Next.</li>
                    <li>Click <strong className="font-semibold">"Create new..."</strong> under the Keystore path to generate a new signing key.</li>
                    <li className="text-red-600 font-semibold">IMPORTANT: Save this key file and remember its passwords! You CANNOT update your app without it. Back it up securely.</li>
                    <li>Finish the wizard to generate the <code className="bg-gray-200 p-1 rounded">.aab</code> file. It will typically be located in <code className="bg-gray-200 p-1 rounded">android/app/release/app-release.aab</code>.</li>
                 </ul>
              </li>
              <li>
                <strong className="block mb-1">Publish on the Google Play Console:</strong>
                 <p className="mb-2">This is the final step!</p>
                 <ul className="list-disc list-inside space-y-1 pl-4 text-xs">
                    <li>Create a <a href="https://play.google.com/console" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Play Developer account</a> (this has a one-time $25 fee).</li>
                    <li>In the console, create a new app and fill out all the store listing details: name, descriptions, privacy policy, etc.</li>
                    <li>You will need to design an app icon (512x512px) and take screenshots of your app running. You can run it on an Android emulator within Android Studio to get these.</li>
                    <li>Upload your signed <code className="bg-gray-200 p-1 rounded">.aab</code> file to a new release.</li>
                    <li>Follow the console's guidance to roll out your app to testing tracks and finally to production!</li>
                 </ul>
              </li>
          </ol>
           <p className="mt-4 ml-5 text-xs text-gray-500">
              This process might seem like a lot, but taking it one step at a time is very manageable. For more details, the official <a href="https://capacitorjs.com/docs/android" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Capacitor Android documentation</a> is an excellent resource.
           </p>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
