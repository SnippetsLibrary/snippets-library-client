import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const toasts = {
  userConfirmSuccess: () => toast('User successfully activated!'),
  userRegisterSuccess: () => toast('We sent an activation link to your email!'),
}
