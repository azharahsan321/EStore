import { Component } from '@angular/core';
import { UserServicesService } from 'src/app/user/Services/user-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private userService: UserServicesService) { }

  ngOnInit() {
    this.userService.test().subscribe(res => {
      console.log(res)
    })
  }

  public nums: any = [1, 1, 1, 1, 1, 1, 1, 1];
}

