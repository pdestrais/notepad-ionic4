import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { NotesService } from '../services/notes.service';
import { Note } from '../interfaces/note';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 
  notes : any;

  constructor(/* private notesService: NotesService */ private dataService:DataService, private alertCtrl: AlertController, private navCtrl: NavController, private menuCtrl: MenuController){
 
  }
 
  ngOnInit(){
    console.log("[HomePage - ngOnInit] entering method")
    this.dataService.dataServiceSubject.subscribe(event => {
      if (event.message == "ReplicationCompleted") {
        this.dataService.fetch().then((data) => {
          let notes = data.rows.map(row => {
              return row.doc;
          });
          this.notes = notes;
          //console.log("[dataServiceSubject]fetching all notes : "+JSON.stringify(this.notes));
      })  
      }
    })

  }
 
  addNote(){
    this.alertCtrl.create({
      header: 'New Note',
      message: 'What should the title of this note be?',
      inputs: [
        {
          type: 'text',
          name: 'title'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: (data) => {
            let note:any = {title: data.title, content: '', tags: [], type:'note'};
            this.dataService.saveDoc(note,"note");
          }
        }
      ]
    }).then((alert) => {
      alert.present();
    });
 
  }

  showMenu() {
    this.menuCtrl.open("mainMenu");
  }
 
}