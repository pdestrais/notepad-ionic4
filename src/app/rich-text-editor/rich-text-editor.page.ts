import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.page.html',
  styleUrls: ['./rich-text-editor.page.scss'],
})
export class RichTextEditorPage implements OnInit {

  name = 'Angular 6';
  
  constructor() { }

  ngOnInit() {
  }

}
