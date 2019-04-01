import { Component, OnInit } from '@angular/core';
import {DetailspageService} from '../git/detailspage.service';
import {FormsModule} from '@angular/forms';
// import * as $ from "jquery"

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.css']
})
export class DetailspageComponent implements OnInit {
profile: any = [];
repos: any = [];
username: string;

constructor(private detailspageServer: DetailspageService) { }

ngOnInit() {



}

findprofile() {
 this.detailspageServer.updateprofile(this.username);
 this.detailspageServer.getprofileInfo(this.username).subscribe(profile => {
   console.log(profile);
   this.profile = profile;
});
 this.detailspageServer.getprofileRepos().subscribe(repos => {
   console.log(repos);
   this.repos = repos;
 });

}
}
