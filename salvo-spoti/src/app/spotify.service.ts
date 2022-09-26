import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBZYk8RI-9w8JAIqMhy1kEtA0WqhX-L5GT61wvIvCJPGPdazEVX7DckoUf9D4yqi2G5dkE2wgZe7Gnziz2kYItbQ308QyZ3QUZuN6yR8GzNxbRjCRwNgl_-jJn4MqTUqFjWxmnIbWzlOyL_InuFoPIKmgkIUqvsNHiTQ5gCX295ljauMoyEeQ'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}