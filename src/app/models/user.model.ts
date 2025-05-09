
export interface User {
    id: any;
    userName: string;
    name:string;
    password: string;
    role:string;
  }
  
  export interface UserLoad extends Omit<User, 'password'> {
    jwt: string;
  }
  
  export interface UserRequestDTO extends Omit<User, 'id'> {
    repeatedPassword: string
  }
  
  export interface UserLoginRequestDTO {
    email: string;
    password: string;
  }
  export interface UserLoginResponseDTO {
    jwt:string
  }