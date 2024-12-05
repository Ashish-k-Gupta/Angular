import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle-event',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle-event.component.html',
  styleUrl: './life-cycle-event.component.css'
})
export class LifeCycleEventComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,OnDestroy {

@Input() data!: string;

  constructor(){

    console.log('constructor-')
  }

 
  ngOnInit(){
    console.log('ngOnInit') 

  }
  ngOnChanges(){
   console.log('ngOnChanges') 
  }

  ngDoCheck(){
   console.log('ngDoCheck') 
  }
  ngAfterContentInit(){
   console.log('ngAfterContentInit') 
  }
  ngAfterContentChecked(){
   console.log('ngAfterContentChecked') 
  }
  ngAfterViewInit(){
   console.log('ngAfterViewInit') 
  }

  afterRender(){
   console.log('afterRender') 
  }
  ngOnDestroy(){
   console.log('ngOnDestroy') 
  }
}
