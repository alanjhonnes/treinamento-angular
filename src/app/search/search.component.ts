import {Component, EventEmitter, Output, Input} from '@angular/core';
import {FormControl, FormGroup, FormArray} from '@angular/forms';

@Component({
    selector: 'app-search',
    template: `
        <form>
            <md-input-container>
                <input md-input placeholder="Buscar" [value]=term [formControl]="searchControl">
            </md-input-container>
        </form>
    `
})
export class SearchComponent {
    @Input()
    term: string;

    @Output()
    search: EventEmitter<string> = new EventEmitter<string>();

    searchControl: FormControl;

    constructor() {
        this.searchControl = new FormControl();

        this.searchControl.valueChanges
        .debounceTime(500)
        .subscribe(value => {
            this.search.emit(value);
        });
    }


}
