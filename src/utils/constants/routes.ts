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
  userHome = '/home',
  userProfile = '/:userName',
  search = '/home/search',
  community = '/home/community',

  // Auth
  auth = '/auth',
  authError = '/auth/*',
  authConfirm = '/users/confirm/:confirmId',
  signIn = '/auth/sign-in',
  signUp = '/auth/sign-up',
}
