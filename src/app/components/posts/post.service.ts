import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { episodios, postI } from './../../shared/models/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getlistepisodies(query: string) {
    const filter = `${environment.baseUrlAPI}${query}`;
    return this.http.get<postI[]>(filter);
  }

  getListEpisodiosImg(query: string) {
      const epiIma  = `${environment.baseUrlAPI}${query}`;
      return this.http.get<episodios[]>(epiIma);
  }

  
}


