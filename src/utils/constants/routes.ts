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
  userHome = '/user',
  search = '/user/search',
  community = '/user/community',

  // Auth
  auth = '/auth',
  authError = '/auth/*',
  authConfirm = '/users/confirm/:confirmId',
  signIn = '/auth/sign-in',
  signUp = '/auth/sign-up',
}
