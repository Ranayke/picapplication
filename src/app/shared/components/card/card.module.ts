import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CardComponent,

    ],
    exports: [
        CardComponent
    ],
    imports: [ CommonModule ] //CommonModule e para diretivas do angular funcionarem
})
export class CardModule {

}