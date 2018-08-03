import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styles: []
})
export class DirectoryComponent implements OnInit {
  directories: any = [
    'folder-a', 'folder-b', 'folder-c', 'folder-d', ['folder-a1', 'folder-b1']
  ];
  constructor() { }

  ngOnInit() {
  }

}
