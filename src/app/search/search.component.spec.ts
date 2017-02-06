import {SearchComponent} from './search.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MdInputModule} from '@angular/material';

fdescribe('SearchComponent', () => {

    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                SearchComponent,
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                MdInputModule,
            ],
        })
            .compileComponents();
        fixture = TestBed.createComponent<SearchComponent>(SearchComponent);
        component = fixture.componentInstance;
    });

    it('should instantiate', () => {
        expect(component).toBeDefined();
    });

    it('should start with input filled with search term', () => {
        component.term = 'abc';
        fixture.detectChanges();
        const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
        expect(input.value).toBe('abc');
    });
})