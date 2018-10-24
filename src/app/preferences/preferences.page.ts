import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Storage } from '@ionic/storage';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage implements OnInit {

  private remoteDBURL:string = '';
  private loading = false;

  constructor(private location:Location, private storage:Storage, private dataService:DataService) { }

  ngOnInit() {
    this.storage.get("remoteDBURL").then(result => this.remoteDBURL = result, error => this.remoteDBURL='');
    this.dataService.dataServiceSubject.subscribe(event => {
      event.message=="ReplicationStarted"?this.loading=true:this.loading=false;
    });
  }

  goBack() {
    this.location.back();
  }

  syncWithRemoteDB() {
    this.storage.set("remoteDBURL",this.remoteDBURL);
    //start sync with remote DB using the Data provider service
    this.dataService.syncLocalwithRemote();
  }

  replAndSyncWithRemoteDB() {
    this.storage.set("remoteDBURL",this.remoteDBURL);
    //start sync with remote DB using the Data provider service
    this.dataService.replicateRemoteToLocal();
  }
}
