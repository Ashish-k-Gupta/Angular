import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';  // Import the module
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-select',
  standalone: true,  // Since you're using standalone component, keep this as true
  imports: [FormsModule, NgSelectModule, CommonModule],  // Include NgSelectModule here
  templateUrl: './ng-select.component.html',
  styleUrls: ['./ng-select.component.css']  // Corrected typo from `styleUrl` to `styleUrls`
})
export class NgSelectComponent implements OnChanges, OnInit {

  @Input() icons: string = '';
  @Input() classForColor: any = '';
  // Example data for the select dropdown
  selectedCar: any = 0;
  randomVar: string;
  carList = [
    { id: 1, name: 'Volvo', icon: 'A', color: 'red'},
    { id: 2, name: 'Saab' , icon: 'B', color: 'green'},
    { id: 3, name: 'Opel' , icon: 'C', color: 'orange'},
    { id: 4, name: 'Audi' , icon: 'D', color: 'pink'},
];
  constructor(){
    this.randomVar = ''


    
  }
  ngOnInit(): void {
    console.log(this.classForColor, this.selectedCar)
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  handleChange(e:any){
    // if(changes['selectedCar']){
      this.classForColor = this.carList.filter((item: any, index: number)=>{
        return this.selectedCar == item.id
      })[0].color || 'grey'
      console.log(this.classForColor, this.selectedCar)
    
    // }
  }

  
car: any;
}
