import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RoomCategoryGallery, RoomCategoryGalleryRequestDTO } from 'src/app/models/roomCategoryGallery.model';
import { RoomGaleryService } from 'src/app/services/room-galery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  message:string = '';
  mesaggeValid= this.message.trim() !== '';
  formValid = false;
  updateValid=false;

  galleries:RoomCategoryGallery[]= [];
  dto:RoomCategoryGalleryRequestDTO = {
        tittle: '',
        description: '',
        categoryId: null,
  }
  file:File|null=null;

  constructor(
    private _sanitizer: DomSanitizer,
    private activeRoute: ActivatedRoute,
    private galleryService: RoomGaleryService
  ){}

  ngOnInit(){
    this.activeRoute.paramMap.subscribe(data=>{
      const id= data.get('name');
      this.dto.categoryId = Number(id);

      this.galleryService.getAll(Number(id)).subscribe(galleryResponse=>{
        this.galleries = galleryResponse.map(gallery=>{
          gallery.image = this._sanitizer.bypassSecurityTrustResourceUrl('http://localhost:8090/media/image/'+gallery.imageUrl.replace("/uploads/", ""))
          return gallery;
        });
      });
    });
  }

  
  activeForm(){
      this.formValid = true;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.file = input.files[0];
    }
  }

  create(){
    if(this.file != null){
      this.galleryService.create(this.dto,this.file).subscribe(data=>{

        this.galleries.push(data);
        this.dto ={
          tittle: '',
          description: '',
          categoryId: null,
        }
        

        this.formValid = false;
        this.message = "Se guardo con exito la foto/video"
        this.mesaggeValid=true;
        setTimeout(() => {
        this.message = "";
        this.mesaggeValid = false;
      }, 3000); // 3000 ms = 3 segundos
      });
    }
  }

  delete(id:bigint){
    this.galleryService.delete(Number(id)).subscribe();
    this.galleries = this.galleries.filter(data => data.id !=id );

    this.message = "Se elimino con exito la categoria"
    this.mesaggeValid=true;
    setTimeout(() => {
      this.message = "";
      this.mesaggeValid = false;
    }, 10000); // 10000 ms = 10 segundos
  }

}
