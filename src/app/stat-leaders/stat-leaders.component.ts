import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stat-leaders',
  templateUrl: './stat-leaders.component.html',
  styleUrls: ['./stat-leaders.component.scss']
})
export class StatLeadersComponent implements OnInit {

  constructor() { }

  submitAnalysis(){
    console.log(Input.name)
  }

  ngOnInit() {
    window.scroll(0,0)
  }

}
