export const LocalStorage = {
  setAuthToken: (token: string) => localStorage.setItem('snippetsAuthToken', token),
  getAuthToken: () => localStorage.getItem('snippetsAuthToken') as string,
  deleteAuthToken: () => localStorage.removeItem('snippetsAuthToken'),
}
