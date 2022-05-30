import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { CapitalizePipe } from "./capitalize.pipe";
import { StarsPipe } from "./stars.pipe";

// contient une suite de tests unitaires
describe('AppComponent', () => {

  let fixture:ComponentFixture<AppComponent>;
  let comp:AppComponent;
  let elt : HTMLElement;
  let debug: DebugElement;

  beforeEach(() => {
      // Déclarer l'environnement de la suite de tests unitaires
      // Compiler les components
      TestBed.configureTestingModule({
        declarations: [
          AppComponent, 
          CapitalizePipe, 
          StarsPipe
        ]
      }
      ).compileComponents()

      fixture = TestBed.createComponent(AppComponent);
      comp = fixture.componentInstance;
      elt = fixture.nativeElement;
      debug = fixture.debugElement;
    })

  it('title should be initialized', () => {
      // let fixture = TestBed.createComponent(AppComponent);
      expect(fixture.componentInstance.title).toBeDefined();
  })

  // Permet de créer un test
  it('title should be Demo', () => { 
    // let fixture = TestBed.createComponent(AppComponent);
    // activer la détection de changement dans l'environnement de test
    fixture.detectChanges();
    console.log(fixture);
    console.log(elt)

    // attendu : la propriété title du component = 'demo'
    expect(comp.title).toEqual('demo');

    let titleElt = elt.querySelector('h1');
    //let titleElt = fixture.debugElement.query(By.css('h1'));
    console.log('title de AppComponent : ', comp.title)
    console.log('affichage dans la vue HTML : ', titleElt?.textContent);
    
    let pipe = new CapitalizePipe();
    expect(titleElt?.textContent).toContain(pipe.transform(comp.title));
    
  })

  

})
