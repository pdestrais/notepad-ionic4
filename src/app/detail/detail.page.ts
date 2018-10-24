import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Storage } from '@ionic/storage';
import { Note } from '../interfaces/note';
import { NgxWigToolbarService } from '../services/ngx-wig-toolbar.service';
 
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
 
  private note: Note;
  private mode: string;
  private name="hello";
 
  constructor(private route: ActivatedRoute, private dataService: DataService, private storage: Storage, private navCtrl: NavController, private router: Router, private ngxTB:NgxWigToolbarService) {
 
    // Initialise a placeholder note until the actual note can be loaded in
    this.note = {
      _id: '',
      _rev: '',
      _deleted: false,
      title: '',
      content: '',
      tags: [],
      type:'note'
    };
    this.mode='edit';
  }
 
  ngOnInit() {
 
    // Get the id of the note from the URL
    let noteId = this.route.snapshot.paramMap.get('id');
    // Check that the data is loaded before getting the note
    // This handles the case where the detail page is loaded directly via the URL
    this.dataService.getDoc(noteId).then(doc => {
      { this.note = doc; 
        //this.storage.set("temp",doc);
        console.log("[DetailPage - deleteNote]note affichée : "+JSON.stringify(this.note));
      }
    }); 
    this.ngxTB.addStandardButton("insertText","insertText","insertText","font-color");
  }
 
  noteChanged($event){
/*     this.storage.get("test").then(done => 
      console.log("[DetailPage - noteChanged]test : "+JSON.stringify(done))
    );
    console.log("[DetailPage - noteChanged]note changée : "+JSON.stringify(this.note));
     this.storage.set("infly",this.note);
*/      console.log("[DetailPage - noteChanged]event : "+$event);
  }

  insertInNote() {

  }

  saveNote() {
//    this.storage.get("infly").then(note => {
      console.log("[DetailPage - saveNote]note à sauver : "+JSON.stringify(this.note));
      this.dataService.saveDoc(this.note,'note')
      .then(response => {console.log("[DetailPage - saveNote]note sauvée : "+JSON.stringify(response)); this.router.navigate(['/notes']);})
      .catch(error => console.log(error.message));    
//    })
  }

  deleteNote(){
    console.log('[DetailPage - deleteNote]note à effacer : '+JSON.stringify(this.note));
    this.dataService.deleteDoc(this.note)
    .then(response => {
      console.log("note effacée - réponse : "+JSON.stringify(response));
      this.router.navigate(['/notes']);
    })
/*     .catch(error => 
      console.log("error deleting note - error : "+JSON.stringify(error))
    );
 *///    this.navCtrl.navigateBack('/notes');
  }

  noteSave() {
    console.log('[DetailPage - deleteNote]note a sauver : ')
  }

  enterMarkdownViewMode() {
    this.mode='view';
  }
 
  quitMarkdownViewMode() {
    this.mode='edit';
  }

}
