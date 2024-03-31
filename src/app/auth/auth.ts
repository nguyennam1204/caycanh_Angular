export interface User {
    email: string,
    password: string
    role: number
}
export interface RegisterForm {
  
    email: string,
    password: string,
    confirm_password: string,
    role: number
}
