import { T_UserContacts } from 'src/typings/interfaces/user'

export interface I_UserUpdate {
  alias?: string
  password?: string
  about?: string
  contacts?: T_UserContacts
  saves?: Array<string>
}
