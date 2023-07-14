import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { debounce, debounceTime, filter, map, Observable, startWith, Subject, Subscription } from 'rxjs';
import { VALUES_FOR_RONI_DEMO } from './consts';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CustomersApiService } from '../../pages/customers-main/api/customers-api.service';
import { SearchStoreService } from '../../pages/customers-main/store/search-store.service';
import { SpecialCharacterDirective } from '../../directives/special-character.directive';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, SpecialCharacterDirective],  
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SearchComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: SearchComponent,
      multi: true
    }
  ]
})
export class SearchComponent implements OnInit {
  searchForm = this.fb.group({
    searchControl: this.fb.control<string>('')
  });
  
  // searchResults$ = this.storeSearch.results$;
  // userInput$?: Observable<string | null>;  
  
  constructor(private readonly fb: FormBuilder, 
    private readonly storeSearch: SearchStoreService) { }
    

  ngOnInit(): void {
    const userInput$ = this.searchForm.controls.searchControl.valueChanges.pipe(
      debounceTime(200));

      // this.books$ = this.seaerchBooks.pipe(
      //   // wait 300ms after each keystroke before considering the term
      //   debounceTime(300),
      //   // ignore new term if same as previous term
      //   distinctUntilChanged(),
      //   // ignore new term if fewer than 3 characters
      //   filter((term: string) => term.length >= 3),
      //   // switch to new search observable each time the term changes
      //   switchMap((term: string) => this.seaerchBooksService.search(this.authorId, this.genere, term)),
    // );
    
    const result$ = this.storeSearch.setFilter(userInput$);  
  }

  doSearch(searchWord: any) {
    // if(!searchWord.data){
    //   return;
    // }
    // this.storeSearch.setFilter(this.userInput$!);  
  }

}
