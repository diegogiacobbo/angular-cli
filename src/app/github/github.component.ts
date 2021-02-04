import { Component, Injectable, OnInit } from '@angular/core';
import { GithubService } from './github.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  projets$: Observable<any>;

  constructor(private githubService: GithubService) {
    this.projets$ = new Observable<any>();
  }

  ngOnInit(): void {
    this.projets$ = this.githubService.getProjectList();
  }

}
