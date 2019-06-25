import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-per-advanced-stats',
  templateUrl: './per-advanced-stats.component.html',
  styleUrls: ['./per-advanced-stats.component.scss']
})
export class PerAdvancedStatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
  }

}
