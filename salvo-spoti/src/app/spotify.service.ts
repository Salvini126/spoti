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
        'Bearer BQC_GzVig-7EDfWp3t5p6OJAvqNAyBvvlcwejpZzz5zogmbS_U_JHQEn-JraUOaIyTSZVuB4qolXlajqEGZrAKqtFW2YnEeOSs9Mpe6nHqB8016KEnB4tPLc71ZH9YIKhR0W7smJxkCqi88y5G2VrvIypqf7aRtaBeVlrTGFEfPwbYnkXke90g'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}