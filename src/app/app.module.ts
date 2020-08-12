import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { KnobComponent } from './controls/knob/knob.component';
import { OscillatorComponent } from './components/oscillator/oscillator.component';
import { LedComponent } from './components/led/led.component';
import { SettingsRackComponent } from './components/oscillator/settings-rack/settings-rack.component';
import { PartialsComponent } from './components/oscillator/settings-rack/partials/partials.component';

import { from, fromEventPattern } from 'rxjs';
import { PartialsSelectorComponent } from './components/oscillator/settings-rack/partials/partials-selector/partials-selector.component';
import { EffectsRackComponent } from './effects-rack/effects-rack.component';
import { AdsrEnvelopeComponent } from './components/oscillator/settings-rack/adsr-envelope/adsr-envelope.component';
import { PianoRollComponent } from './components/piano-roll/piano-roll.component';
import { SimpleEqComponent } from './components/simple-eq/simple-eq.component';
import { EffectRackComponent } from './components/effect-rack/effect-rack.component';
import { NgxSelectModule } from 'ngx-select-ex';
import { SearchBarComponent } from './controls/search-bar/search-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    KnobComponent,
    OscillatorComponent,
    LedComponent,
    SettingsRackComponent,
    PartialsComponent,
    PartialsSelectorComponent,
    EffectsRackComponent,
    AdsrEnvelopeComponent,
    PianoRollComponent,
    SimpleEqComponent,
    EffectRackComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxSelectModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
