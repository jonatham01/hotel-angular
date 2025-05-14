import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomAttributeRequestDTO, RoomAttributeResponseDTO } from 'src/app/models/roomAttribute.model';
import { AttributeRoomService } from 'src/app/services/attribute-room.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent {

  message:string = '';
  mesaggeValid= this.message.trim() !== '';
  formValid = false;
  updateValid=false;

  pageTitle:number | null = null;
  attributes:RoomAttributeResponseDTO[] = [];
  dto:RoomAttributeRequestDTO = {
    roomAttributeName: '',
    roomAttributeDescription: '',
    roomCategoryId:null
  }
  file:File|null=null;

  constructor(
    private _sanitizer: DomSanitizer,
    private activeRoute: ActivatedRoute,
    private attributeService: AttributeRoomService,
    private router:Router,
    private http:HttpClient,
    private tokenService: TokenService,
  ){}

  ngOnInit(){
    this.activeRoute.paramMap.subscribe(data=> {
      const id = data.get('name');
      this.pageTitle= Number(id);
      this.dto.roomCategoryId =Number(id);

      this.attributeService.getAll(Number(id)).subscribe( attributeResponse =>{
         this.attributes = attributeResponse.map(attribute =>{
          //console.log('http://localhost:8090/media/image/'+attribute.roomAttributePhotoUrl.replace("/uploads/", ""))
          attribute.image = this._sanitizer.bypassSecurityTrustResourceUrl('http://localhost:8090/media/image/'+attribute.roomAttributePhotoUrl.replace("/uploads/", ""));
          console.log(this._sanitizer.bypassSecurityTrustResourceUrl('http://localhost:8090/media/image/'+attribute.roomAttributePhotoUrl.replace("/uploads/", "")))
          return attribute;
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
      //console.log('Archivo seleccionado:', this.file);
    }
  }
  create(){
    console.log("el dto");
    console.log(this.dto)
    if(this.file!=null){
      this.attributeService.create(this.dto,this.file).subscribe(data=>{
        this.attributes.push(data);
        this.dto= { 
          roomAttributeName: '',
          roomAttributeDescription: '',
          roomCategoryId:null
        };
        this.formValid = false;
        this.message = "Se guardo con exito la nueva categoria"
        this.mesaggeValid=true;
        setTimeout(() => {
        this.message = "";
        this.mesaggeValid = false;
      }, 3000); // 3000 ms = 3 segundos


      })
    }
  }

  updateForm(data:RoomAttributeResponseDTO){

  }

  update(){

  }
  delete(id:number){

  }


}
