import {Component, OnInit} from '@angular/core';
import {Student} from './model/Student';
import {StudentManagementService} from './services/student-management.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Faculty of Computer Science and Engineering';
  constructor () {
  }
  ngOnInit() {}
}
