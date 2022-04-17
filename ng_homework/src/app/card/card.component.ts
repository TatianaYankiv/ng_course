import { Component, Input } from "@angular/core";

import {Movie} from './card.models';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.sass']

})
export class CardComponent {
    @Input()
    myMovie!: Movie;
}