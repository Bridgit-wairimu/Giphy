import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  gifs:any[]=[];
  constructor(private GiphyService: GiphyService) { }
  ngOnInit(): void {
    this.GiphyService.getTrends()
    .subscribe((response: any)=>{
   this.gifs=response.data;
    })
  }
}
     