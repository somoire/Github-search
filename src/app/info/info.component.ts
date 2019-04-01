import { Component, OnInit, NgModule } from '@angular/core';
import {DetailspageService} from '../git/detailspage.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
@NgModule({
  imports: [
    FormsModule
  ]
})
export class infoComponent implements OnInit {

  profile: any [];
  repos: any [];
  username: string;

  constructor(private detailspageServe: DetailspageService) { }

  ngOnInit() {
  }

}
