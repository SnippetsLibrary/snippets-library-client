export enum ROUTES {
  home = '/',
  error = '/*',

  // Welcome
  learn = '/learn',
  updates = '/updates',

  // Introduce
  library = '/library',
  docs = '/docs',

  // Main
  userHome = '/search/posts',
  userProfile = '/:userName',
  userProfileSettings = '/:userName/settings',
  post = 'search/posts/:postId',
  community = '/community',

  // Auth
  auth = '/auth',
  authError = '/auth/*',
  authConfirm = '/users/confirm/:confirmId',
  signIn = '/auth/sign-in',
  signUp = '/auth/sign-up',
}
