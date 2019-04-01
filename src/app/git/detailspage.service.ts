import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DetailspageService {

  private username: string;
  private clientid = '77726f2b903b24d832bb';
  private clientsecret = '6007cc669503bf5c8f2335a53d360b7223501981';

  constructor(private http: HttpClient) {
      console.log('Ready for display');
      this.username = 'somoire';
 }
 getprofileInfo(username) {
   console.log(this.username);
   // tslint:disable-next-line:max-line-length
   return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret);

 }
 getprofileRepos() {
// tslint:disable-next-line:max-line-length
return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret);


   }

 updateprofile(username: string) {
   this.username = username;
 }

}
