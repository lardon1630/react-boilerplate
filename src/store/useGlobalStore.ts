/**
 * @file useGlobalStore.ts
 * @description Store global de la aplicación utilizando Zustand.
 * @module store/useGlobalStore
 */

import { createStore } from './createStore';

/**
 * @interface GlobalState
 * @description Define el estado global de la aplicación.
 */
interface GlobalState {
  count: number;
  isDarkMode: boolean;
}

/**
 * @constant useGlobalStore
 * @description Store global con Zustand para manejar el estado general de la aplicación.
 */
export const useGlobalStore = createStore<GlobalState>('global-store', {
  count: 0,
  isDarkMode: false,
});
