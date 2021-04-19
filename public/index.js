

/*
  Create a user with given email and password
  Use to test if an existing Google account
  can still create an email/password user
https://firebase.google.com/docs/auth/web/password-auth#create_a_password-based_account*/
function createUser(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
    console.log('user created' + user.email)
  })
  .catch((error) => {
    console.error(error.code + error.message);
  });
}

/*
  Sign user in with email and password
  Use to test if an existing email/password account
  can still log in after attempting to log in
  with Google
  https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
*/
function signInUserWithEmail(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
    console.log(user.email);
  })
  .catch((error) => {
    console.error(error.message);
  });
}

/*
  Sign in using Google
  Use to create account with Google credentials, then
  attempt to create an email/password account
  Use to test if a Google account can be made when
  an email/password account exists
  https://firebase.google.com/docs/auth/web/google-signin#handle_the_sign-in_flow_with_the_firebase_sdk
*/
function signInUserWithGoogle() {
  // Step 1.
  // User tries to sign in to Google.
  firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  .then((result) => {})
  .catch(function(error) {
    // An error happened.
    if (error.code === 'auth/account-exists-with-different-credential') {
      // Step 2.
      // User's email already exists.
      // The pending Google credential.
      var pendingCred = error.credential;
      // The provider account's email address.
      var email = error.email;
      // Get sign-in methods for this email.
      firebase.auth().fetchSignInMethodsForEmail(email).then(function(methods) {
        // Step 3.
        // If the user has several sign-in methods,
        // the first method in the list will be the "recommended" method to use.
        if (methods[0] === 'password') {
          console.log('password account already exists for ', email);
          // Asks the user their password.
          // In real scenario, you should handle this asynchronously.
          // var password = promptUserForPassword(); // TODO: implement promptUserForPassword.
          // auth.signInWithEmailAndPassword(email, password).then(function(result) {
          //   // Step 4a.
          //   return result.user.linkWithCredential(pendingCred);
          // }).then(function() {
          //   // Google account successfully linked to the existing Firebase user.
          //   goToApp();
        };
      });
    }
  });

  
}

/*
  Get result of Google sign in  
  https://firebase.google.com/docs/auth/web/google-signin#redirect-mode
*/
function getRedirectResult() {
  firebase.auth()
  .getRedirectResult()
  .then((result) => {
    console.log(result);
    if (result.credential) {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch((error) => {
    console.error(error.code + error.message + error.email);
  });
}

/*
  Sign out of Firebase as needed
  https://firebase.google.com/docs/auth/web/password-auth#next_steps
*/
function signOut() {
  firebase.auth().signOut().then(() => {
    console.log('sign out successful');
  }).catch((error) => {
    console.error(error.code + error.message);
  });
}

var test_email = 'abcde@gmail.com'; // a valid Google email
var test_password = 'testpassword123';

// Buttons
document.getElementById('email-login').addEventListener('click', function() {signInUserWithEmail(test_email, test_password)});

document.getElementById('create-email-password').addEventListener('click', function() {createUser(test_email, test_password)});

document.getElementById('google').addEventListener('click', function() { signInUserWithGoogle()});

document.getElementById('google-auth-status').addEventListener('click', function() {getRedirectResult()});

document.getElementById('signout').addEventListener('click', function() {signOut()});