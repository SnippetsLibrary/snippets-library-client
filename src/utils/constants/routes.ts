export enum ROUTES {
  home = '/',
  error = '/*',
  learn = '/learn',
  updates = '/updates',
  library = '/library',
  docs = '/docs',
  community = '/community',
  search = '/search',

  // Auth
  auth = '/auth',
  authError = '/auth/*',
  authConfirm = '/users/confirm/:confirmId',
  signIn = '/auth/sign-in',
  signUp = '/auth/sign-up',
}
