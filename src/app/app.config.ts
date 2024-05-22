import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import {
  provideFirestore,
  getFirestore,
  connectFirestoreEmulator,
} from '@angular/fire/firestore';
import {
  provideFunctions,
  getFunctions,
  connectFunctionsEmulator,
} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import {
  provideStorage,
  getStorage,
  connectStorageEmulator,
} from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     importProvidersFrom(
//       provideFirebaseApp(() => initializeApp(environment.firebase)),
//       provideFirestore(() => getFirestore()),
//       provideAuth(() => getAuth()),
//       provideFunctions(() => getFunctions()),
//       provideStorage(() => getStorage()),
//       provideMessaging(() => getMessaging())
//     ),
//     provideRouter(routes),
//     provideFirebaseApp(() =>
//       initializeApp({
//         projectId: 'ai-playground-424107',
//         appId: '1:219236925850:web:b97c3e92c66b7ac514fa23',
//         storageBucket: 'ai-playground-424107.appspot.com',
//         // locationId: 'europe-west3',
//         apiKey: 'AIzaSyCXEAsw45mQ1ByJuvH19WTbqgxIlwydh38',
//         authDomain: 'ai-playground-424107.firebaseapp.com',
//         messagingSenderId: '219236925850',
//       })
//     ),
//     provideAuth(() => getAuth()),
//     provideFirestore(() => getFirestore()),
//     provideMessaging(() => getMessaging()),
//     provideStorage(() => getStorage()),
//   ],
// };

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      // @ts-ignore
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth()),
      provideFunctions(() => getFunctions()),
      provideStorage(() => getStorage()),
      provideMessaging(() => getMessaging())
    ),
    provideRouter(routes),
  ],
};
