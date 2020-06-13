import { Component, OnInit } from '@angular/core';
import { BiodataService } from '../biodata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public showdata = [];

  constructor(private biodataservice: BiodataService) {}

  ngOnInit(): void {
    this.biodataservice.biodata().subscribe((Data) => (this.showdata = Data));
  }
}
