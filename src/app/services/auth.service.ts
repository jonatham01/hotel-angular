import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, switchMap, tap, throwError } from 'rxjs';
import { UserLoad, UserLoginRequestDTO, UserLoginResponseDTO, UserRequestDTO } from '../models/user.model';
import { TokenService } from './token.service';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl:string = '/auth';
  private user = new BehaviorSubject<UserLoad | null>(null);
  user$ = this.user.asObservable();

  constructor(
    private tokenService: TokenService,
    private httpClient: HttpClient,
    private router:Router
  ) { }

  getProfile(){
    return this.httpClient.post<UserLoad>(
      `${this.apiUrl}/profile`,this.tokenService.getToken()
      );
  }

  login(dto:UserLoginRequestDTO){
    return this.httpClient.post<UserLoginResponseDTO>(
      `${this.apiUrl}/authenticate`,dto
    ).pipe(
      tap(response => { this.tokenService.save(response.jwt); }),
      catchError((error: HttpErrorResponse) => {
      if (error.status === HttpStatusCode.Conflict) {
        return throwError(() => new Error('Conflict: ' + error.message));
      }
      // Manejo genérico de errores
      return throwError(() => new Error('Authentication error: ' + error.message));
    })
  );
}


  loginAndGet(dto:UserLoginRequestDTO){
    return this.login(dto)
    .pipe(
      switchMap(() => this.getProfile()),
      )
    .subscribe( (user) => {
      if (user){
        this.user.next(user);
        this.router.navigateByUrl('/admin')
      }
    });
  }

  logout() {
    return this.httpClient.get<string>(`${this.apiUrl}/logout`).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = 'Logout failed';

        if (error.status === HttpStatusCode.Unauthorized) {
          errorMsg = 'Unauthorized or session already closed.';
        } else if (error.status === HttpStatusCode.InternalServerError) {
          errorMsg = 'Server error occurred during logout.';
        }

        return throwError(() => new Error(errorMsg));
      })
    );
  }

   create(user:UserRequestDTO){

    return this.httpClient.post<UserLoad>(`${this.apiUrl}/save`,user)

    .pipe(
      tap(response => this.tokenService.save(response.jwt)),
      catchError((error: HttpErrorResponse,) => {
        if (error.status === HttpStatusCode.Conflict) {
          return throwError('Server is in conflict');
        }
        return throwError(error.message);
      })
    )
    .subscribe(response =>{ this.router.navigateByUrl('/login')}); 
  }


}
