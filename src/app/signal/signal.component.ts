import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed,  signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {



  firstName = signal("Ashish")
  lastName=   signal("Gupta")
  rollNumber= signal<number>(0)
  present = signal<boolean>(false)
  todayLesson = signal<any>({}) ;
  fullName = computed(()=> this.firstName() + " " + this.lastName())

  cityList = signal

  constructor(){
    // const fName = this.firstName();

    setTimeout(() => {
      // this.lastName = "What is that bruh...."
    }, 5000);

  }

 
  

  changeName(){
    this.firstName.set("Anmol")
  }


  addRollNumber(){
    this.rollNumber.set(this.rollNumber() + 1)
  }

  handleChange(event: Event){
    this.todayLesson.update((item: any) => ({...item, value:(event.target as HTMLInputElement).value }))
    console.log(this.todayLesson());
  }

  changeFirstName(){
    if(this.firstName() == "Ashish"){
      this.firstName.set("karan");
    }else{
      this.firstName.set("Ashish") 
    }
  }
  
  changeLastName(){
    if(this.lastName() == "Gupta"){
      this.lastName.set("Gandhi") 
    }else{
      this.lastName.set("Gupta")
    }
  }
}
