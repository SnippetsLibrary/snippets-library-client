export enum ROUTES {
  // Welcome
  home = '/',
  learn = '/learn',
  updates = '/updates',
  error = '/*',

  // Introduce
  library = '/library',
  docs = '/docs',
  community = '/community',

  // Auth
  auth = '/auth',
  authError = '/auth/*',
  authConfirm = '/users/confirm/:confirmId',
  signIn = '/auth/sign-in',
  signUp = '/auth/sign-up',
}
