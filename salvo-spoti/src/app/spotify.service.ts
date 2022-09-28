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
        'Bearer BQAmIR9h6bno_amqEyNd4btrsJG3hWXX5X6u4KoLbiQMrXgfiWUxTUfJ9dkriUcquXF0iqrHYl9oYCb5VCbO6MbPkuINdPqpUS8bCbnod1DLdKrn06oJU8Elmqai3VBLOV836dzdCPgr69domB-imvPAACXp3OlxtW6o8XSaEIkVvaNxkgro_g'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}