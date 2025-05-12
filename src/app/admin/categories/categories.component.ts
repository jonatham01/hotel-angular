import { Component } from '@angular/core';
import { RoomCategoryRequestDTO, RoomCategoryResponseDTO } from 'src/app/models/roomCategory.model';
import { RoomCategoryService } from 'src/app/services/room-category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  categories: RoomCategoryResponseDTO[]  = [];
  dto: Partial<RoomCategoryRequestDTO> = {
    roomCategoryHotelId:1,
  };
  nameError=false;
  priceError=false;
  descriptionError=false;


  constructor(
    private categoryService:RoomCategoryService,
  ){}

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(data=>{
      if(data){
        this.categories=data;
      }
    });
  }

  create(){
    this.categoryService.create(this.dto).subscribe(
      data=>{
        this.categories.push(data);
        this.dto={};
      }
    );
  }

}
