import { Component, OnInit } from '@angular/core';
import { TutorialResponse } from 'src/app/interfaces/tutorial.interface';
import { LandingService } from 'src/app/services/landing.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private landingService: LandingService) { }

  tutorials: TutorialResponse[] = [];

  ngOnInit(): void {

    
    this.landingService.getListadoTutorials().subscribe(res => {
      this.tutorials = res;
    })
  }

}
