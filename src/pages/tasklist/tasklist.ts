import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TasklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tasklist',
  templateUrl: 'tasklist.html',
})
export class TasklistPage {
  tasks: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tasks = [
      { title: 'Milk', status: 'open' },
      { title: 'Eggs', status: 'open' },
      { title: 'Syrup', status: 'open' },
      { title: 'Pancake Mix', status: 'open' },
    ]
  }

  addItem() {
    let theNewTask: string = prompt("New Task");
    if (theNewTask !== '') {
      this.tasks.push({ title: theNewTask, status: 'open' });
    }
  }

  markAsDone(task: any) {
    task.status = 'done';
  }

  removeTask(task: any) {
    task.status = "removed";
    let index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    } else {

    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TasklistPage');
  }

}
