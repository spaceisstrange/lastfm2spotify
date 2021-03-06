import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './/app-routing.module'
import { SpotifyLoginComponent } from './spotify-login/spotify-login.component'
import { LocalStorageService } from './services/local-storage.service';
import { PlaylistCreatorComponent } from './playlist-creator/playlist-creator.component';


@NgModule({
    declarations: [
        AppComponent,
        SpotifyLoginComponent,
        PlaylistCreatorComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
    ],
    providers: [LocalStorageService],
    bootstrap: [AppComponent]
})
export class AppModule { }
