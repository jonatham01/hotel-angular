import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoomCategoryRequestDTO, RoomCategoryResponseDTO } from 'src/app/models/roomCategory.model';
import { RoomCategoryService } from 'src/app/services/room-category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  message:string = '';
  mesaggeValid= this.message.trim() !== '';
  formValid = false;
  updateValid=false;

  categories: RoomCategoryResponseDTO[]  = [];
  dto: RoomCategoryRequestDTO = {
    roomCategoryName: '',
    roomCategoryPrice: null,
    roomCategoryDescription: '',
    roomCategoryHotelId:1,
  };
  categoryId: number | null= null;
  nameError=false;
  priceError=false;
  descriptionError=false;


  constructor(
    private categoryService:RoomCategoryService,
    private router:Router
    
  ){}

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(data=>{
      if(data){
        this.categories=data;
      }
    });
  }
  activeForm(){
    this.formValid = true;
  }

  create(){
    this.categoryService.create(this.dto).subscribe(
      data=>{
        this.categories.push(data);
        this.dto={
            roomCategoryName: '',
            roomCategoryPrice: null,
            roomCategoryDescription: '',
            roomCategoryHotelId: 1,
        };
        this.formValid = false;
        this.message = "Se guardo con exito la nueva categoria"
        this.mesaggeValid=true;
        setTimeout(() => {
        this.message = "";
        this.mesaggeValid = false;
      }, 3000); // 3000 ms = 3 segundos
      }
    );
  }

  updateForm(categoriy: RoomCategoryResponseDTO){
    this.formValid=true;
    this.updateValid=true;
    this.dto.roomCategoryName = categoriy.roomCategoryName;
    this.dto.roomCategoryDescription = categoriy.roomCategoryDescription;
    this.dto.roomCategoryPrice = categoriy.roomCategoryPrice
    this.categoryId =categoriy.roomCategoryId
  }

  update(){
    if(this.categoryId != null){
       this.categoryService.update(this.categoryId,this.dto).subscribe(data=>{
        const index = this.categories.findIndex(cat => data.roomCategoryId ===cat.roomCategoryId);
        this.categories[index] = data;
        this.formValid=false;
        this.updateValid=false;
        this.formValid = false;
        this.message = "Se actualizo con exito la categoria"
        this.mesaggeValid=true;
        setTimeout(() => {
          this.message = "";
          this.mesaggeValid = false;
        }, 10000); // 10000 ms = 10 segundos
       });
    }
  
  }

  delete(id:number){
    this.categoryService.delete(id).subscribe(data=>{
       
        
    });
     this.categories= this.categories.filter( category => category.roomCategoryId !== id);
        this.message = "Se elimino con exito la categoria"
        this.mesaggeValid=true;
        setTimeout(() => {
          this.message = "";
          this.mesaggeValid = false;
        }, 10000); // 10000 ms = 10 segundos
  }

  navigate(id:number){
     this.router.navigateByUrl('admin/attribute/'+id);
  }
  navigateGaleria(id:number){
     this.router.navigateByUrl('admin/galery/'+id);
  }

}
