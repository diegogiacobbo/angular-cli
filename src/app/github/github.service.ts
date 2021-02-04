import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  /**
   * #FIXME: Change to enviroments;
   */
  private readonly API = 'https://api.github.com/users/diegogiacobbo/';

  constructor(private http: HttpClient) { }

  public getProjectList(): Observable<any> {
    return this.http.get(this.API + 'repos').pipe(take(1));
  }
}
