import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoomRequest, RoomResponse } from 'src/app/models/room.model';
import { RoomCategory, RoomCategoryRequestDTO, RoomCategoryResponseDTO } from 'src/app/models/roomCategory.model';
import { RoomCategoryService } from 'src/app/services/room-category.service';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  message:string = '';
  mesaggeValid= this.message.trim() !== '';
  formValid = false;
  updateValid=false;

  rooms:RoomResponse[] = [];
  dto: RoomRequest  = {
    name:'',
    description:'',
    roomCategoryId: null,
    roomCategoryHotelId:1,
    roomStatus: ''
  }
  roomId:number |null = null;
  categories:RoomCategoryResponseDTO[] = [];
  nameError = false;
  descriptionError = false;
  categoryError = false;
  

  constructor(
    private roomService:RoomService,
    private categoryService:RoomCategoryService,
    private router:Router
    
  ){}

  ngOnInit(){
    this.roomService.getAll().subscribe(data=>{
      
      this.rooms = data
    });

    this.categoryService.getAll().subscribe(data =>{
      this.categories = data;
    })
  }

  activeForm(){
    this.formValid = true;
  }

  navigate(ruta:string){
    
     this.router.navigateByUrl(ruta);
  }

  create(){
    this.roomService.create(this.dto).subscribe(
      data =>{
        this.rooms.push(data);
        this.dto = {
          name:'',
          description:'',
          roomCategoryId: null,
          roomCategoryHotelId:1,
          roomStatus: ''
        };
        this.formValid = false;
        this.message = "Se guardo con exito la habitación"
        this.mesaggeValid=true;
        setTimeout(() => {
        this.message = "";
        this.mesaggeValid = false;
      }, 3000); // 3000 ms = 3 segundos

      }
    )
  }

  updateForm(room:RoomResponse){
    this.formValid=true;
    this.updateValid=true;
    this.dto = room;
    this.roomId = room.roomId;
  }

  update(){
    if(this.roomId!= null){
      this.roomService.update(this.roomId, this.dto).subscribe(data=>{
        const index = this.rooms.findIndex(room => room.roomId ==data.roomId);
        this.rooms[index] = data;

        this.formValid=false;
        this.updateValid=false;
        this.formValid = false;
        this.message = "Se actualizo con exito la categoria"
        this.mesaggeValid=true;
        setTimeout(() => {
          this.message = "";
          this.mesaggeValid = false;
        }, 3000); // 3000 ms = 3 segundos
      })
    }
  }

  delete(id:number){
    this.roomService.delete(id).subscribe();
     this.rooms= this.rooms.filter( data => data.roomId !== id);
        this.message = "Se elimino con exito."
        this.mesaggeValid=true;
        setTimeout(() => {
          this.message = "";
          this.mesaggeValid = false;
        }, 3000); // 3000 ms = 3 segundos
  }



}
