import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.scss']
})
export class MenuComponent implements OnInit {

  @Input() animate: boolean;
  @ViewChild('navmenu') navmenu: ElementRef;
  @ViewChild('menulist') menulist: ElementRef;

  constructor(private _renderer: Renderer2) {
    this.animate = false;
    this.navmenu = new ElementRef('');
    this.menulist = new ElementRef('');
  }

  ngOnInit(): void { }

  toggle(): void {
    this.animate = !this.animate;
    this.animate ? this.open() : this.close();
  }

  private open(): void {
    this._renderer.addClass(this.navmenu.nativeElement, 'open');
    this._renderer.addClass(this.menulist.nativeElement, 'list-open');
  }

  private close(): void {
    this._renderer.removeClass(this.navmenu.nativeElement, 'open');
    this._renderer.removeClass(this.menulist.nativeElement, 'list-open');
  }

}
