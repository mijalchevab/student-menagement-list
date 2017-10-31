import { Injectable } from '@angular/core';
import {Student} from '../model/Student';



@Injectable()
export class StudentManagementService {

  constructor() { }
  private idSequence = 0;
  private students = [{
    name: 'Bojana Mijalcheva',
    index: 151030,
    department: 'KNI'
  }, {
    name: 'Iva Mihajlovska',
    index: 151008,
    department: 'KNI'
  }, {
    name: 'Marija Krsteska',
    index: 151041,
    department: 'KNI'
  }, {
    name: 'Iva Petrovikj',
    index: 151119,
    department: 'KNI'
  }, {
    name: 'Marija Davcevska',
    index: 151079,
    department: 'KNI'
  }];
  public listStudents(): Promise<Student[]> {
    return Promise.resolve(this.students);
  }
  public studentDetails(index: number): Promise<Student> {
    return this.listStudents()
      .then(students => students.find(student => student.index === index));
  }
  save(student: Student): Promise<Student>{
    const studentFromServer =[];
    Object.assign(studentFromServer,this.students);
    this.students=studentFromServer;
    this.students.push(student);
    return Promise.resolve(student);
  }
   edit(originalStudent: Student, updatedStudent: Student): Promise<Student> {
    const studentFromServer=[];
    Object.assign(studentFromServer,this.students);
    this.students=studentFromServer;

    return Promise.resolve(updatedStudent);
   }
}


