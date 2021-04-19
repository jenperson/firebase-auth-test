  # Testing Firebase Auth Account linking
  
  This app tests to see if signing in with Google will
  link an existing email account and vice versa

  ## Installation

  1. Create a [Firebase project](https://firebase.google.com/docs/web/setup)
  2. Install the [Firebase CLI](https://firebase.google.com/docs/web/setup#install-cli-deploy)
  3. Enable Google and email/password sign-in methods in the [Firebase console](https://console.firebase.google.com/project/_/authentication/providers?consoleUI=FIREBASE)
  4. Serve to Firebase Hosting locally

  ## Usage

  Buttons are use to trigger functions rather than running
  automatically. Google requires a pop-up or redirect for sign
  in so user interaction is required.

  __Note that this code includes an email and password.__
  Never do this in a real app.
  Do not commit a real email or password.
  It's recommended to use the [Firebase Emulator](https://firebase.google.com/docs/hosting/test-preview-deploy#preview-channels) rather than deploying
  live.
  Delete app when finished testing.
  Delete all accounts used in testing via the [Firebase Console](firebase.google.com/console)
  Actually, just delete the whole Firebase project to be sure.

  Replace the placeholder email in `index.js` with an existing Google account.
  It is best to create a new Google account that will only be used for this purpose.
  
  Replace the placeholder password in `index.js` if you want to, but do now use
  your actual Google password.

  Once app is running locally, you can create accounts and log in. Verify results in the Firebase console.
