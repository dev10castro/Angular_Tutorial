import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideFirebaseApp(() =>
    initializeApp({
        apiKey: "AIzaSyDcAflq3xPL45chkWr4t4m9_SRF-to_LnE",
        authDomain: "task-firebase-ea361.firebaseapp.com",
        databaseURL: "https://task-firebase-ea361-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "task-firebase-ea361",
        storageBucket: "task-firebase-ea361.firebasestorage.app",
        messagingSenderId: "142953094248",
        appId: "1:142953094248:web:7236b7dce8c0fd95172fdd"
    })),
    provideAuth(() => getAuth()), provideDatabase(() => getDatabase())
  ]
};
