import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
// Sin la implementación de viewChild
// <input type="text"
// class="form-control"
// placeholder="Buscar gifs..."
// (keyup.enter)="searchTag(txtTagInput.value)"
// #txtTagInput>
@Component({
  selector: 'gifs-search-box',
  template: `<h5>Buscar:</h5>
             <input type="text"
                    class="form-control"
                    placeholder="Buscar gifs..."
                    (keyup.enter)="searchTag()"
                    #txtTagInput>`
})

export class SearchBoxComponent  {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;
  constructor(private gifsService: GifsService) { }
  // Sin la implementación de viewChild
  // searchTag(newTag: string) {
  //   console.log({newTag})
  // }
  searchTag() {
    debugger
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    //Limpiar la caja de texto
    this.tagInput.nativeElement.value = '';
  }
}
