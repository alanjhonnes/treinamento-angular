import {Router, ActivatedRoute} from '@angular/router';
import {Component, EventEmitter, Output} from '@angular/core';
import {SearchService} from './search.service';

@Component({
    template: `<app-search [term]="term" (search)="onSearch($event)"></app-search>
    <md-spinner *ngIf="loading"></md-spinner>
    <div *ngIf="!loading">
        <div *ngIf="books.length > 0">{{total}} livros encontrados.</div>
        <div *ngIf="books.length === 0">Nenhum livro encontrado.</div>
    </div>
    <div *ngFor="let book of books">
        {{ book.volumeInfo.title }}
    </div>
    <h1>test</h1>
    <h1>test</h1>
    <h1>test</h1>
    <h1>test</h1>
    <h1>test</h1>
    <h1>test</h1>
    <h1>test</h1>
    <h1>test</h1>
    <h1>test</h1>
    <h1>test</h1>
    <h1>test</h1>
    <h1>test</h1>
    <h1>test</h1>
    <h1>test</h1>
    <div class="fixed-buttons">
      <button *ngFor="let book of books">
            {{ book.volumeInfo.printType }}
        </button>
    </div>
    
    `
})
export class SearchPageComponent {

    public term: string = '';

    public books: any[] = [];
    public total: number;

    public loading: boolean = false;

    constructor(private searchService: SearchService, private route: ActivatedRoute, private router: Router) {
        this.route.params
            .map(params => params['term'])
            .filter(term => !!term)
            .do(term => {
                this.term = term;
                this.loading = true;
                console.log(term);
            })
            .switchMap(term => this.searchService.searchBook(term))
            .subscribe((result: { items: any[], totalItems: number }) => {
                this.books = result.items ? result.items : [];
                this.total = result.totalItems;
                this.loading = false;
                console.log('searchResult:', result);
            })
    }

    onSearch(search: string) {
        console.log('on search', search);
        this.router.navigate(['search', search]);

    }
}
