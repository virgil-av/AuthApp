import { Component, OnInit } from '@angular/core';
import {Auth} from "../../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private auth: Auth){}

  ngOnInit() {
  }

}
