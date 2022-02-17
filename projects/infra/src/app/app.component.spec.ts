import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'plugins'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('plugins');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'plugins app is running!'
    );
  });
});


describe('when login succeeds', function () {
  // api.login returns a promise. instead of constructing a promise
  // and setting our stub to return it, we can use stub.resolves()
  // to return a resolved promise
  beforeEach(function () {
    cy.stub(api, 'login').resolves('user-id-123')

    return this.auth.login('user', 'pass')
  })

  it('updates logged in status to true', function () {
    expect(this.auth.loggedIn).to.be.true
  })

  it('updates user id', function () {
    expect(this.auth.userId).to.equal('user-id-123')
  })
})


it('fetches mock users', () => {
  cy.visit('/local-api-example')

  cy.intercept('GET', '/users', {
    fixture: 'users.json',
  }).as('users')

  cy.get('#load-users').click()
  cy.wait('@users')
  cy.get('.user').should('have.length', 2)
})


it('shows no Response message', () => {
  // stub server response with []
  cy.intercept('/favorite-fruits', [])
  cy.visit('/')
  cy.contains('No favorites').should('be.visible')
})