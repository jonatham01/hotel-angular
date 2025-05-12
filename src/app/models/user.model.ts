
export interface User {
    id: any;
    username: string;
    name:string;
    password: string;
    role:string;
  }
  
  export interface UserLoad extends Omit<User, 'password'> {
    jwt: string;
  }
  
  export interface UserRequestDTO {
    username: string;
    name:string;
    password: string;
    repeatedPassword: string
  }
  
  export interface UserLoginRequestDTO {
    email: string;
    password: string;
  }
  export interface UserLoginResponseDTO {
    jwt:string
  }