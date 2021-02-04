import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { GithubService } from './github.service';

describe('GithubService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [],
    imports: [HttpClientModule],
    providers: [ GithubService ]})
    );

  it('should be created', () => {
    const service: GithubService = TestBed.inject(GithubService);
    expect(service).toBeTruthy();
  });
});
