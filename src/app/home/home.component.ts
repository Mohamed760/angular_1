import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  // userName:string = "mohamed soliman";
  // userAge:number = 22;
  // x:null = null;
  // y:undefined = undefined;
  
  // isAdmin:boolean = true;

  // // Array
  // friends!:string[];
  // // Tuple
  // mix:[string , number] = ["mohamed", 22];
  // // union
  // demo: number | string = ""
  // // void >> function or methods لو الفانكشن دي مش هترجع حاجه
  // // test():void{
    
  // // }
  data!:string;
  userName:string = "Mohamed soliman";
  userAge:number = 20;
  googleLink:string = "https://www.google.com/"
  img:string = "assets/img/post-1.jpg"
  isAdmin:boolean = false;

  test(x:Event){
    console.log(x.target);
    
  }

  textCenter:string = "text-center"

}
