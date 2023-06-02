import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [ PhotoComponent ],/* tudo que o modulo tem, se enchergam entre si */
    exports: [ PhotoComponent ],/*dar acesso aos componentes somente a quem importar: acessivel por quem importar o modulo*/
    imports: [ HttpClientModule ]
})
export class PhotosModule {}