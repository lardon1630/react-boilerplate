/**
 * @file createStore.ts
 * @description Función de fábrica para crear stores en Zustand con soporte para persistencia y devtools.
 * @module store/createStore
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';

/**
 * @interface State
 * @description Representa el estado genérico del store.
 */
interface State {
    [key: string]: any;
}

/**
 * @interface Actions
 * @description Define las acciones comunes para modificar el estado.
 */
interface Actions {
    /**
     * @function setState
     * @description Modifica una propiedad del estado.
     * @param {string} key - Clave del estado a modificar.
     * @param {any} value - Nuevo valor para la clave del estado.
     */
    setState: (key: string, value: any) => void;

    /**
     * @function resetState
     * @description Restablece el estado a su valor inicial.
     */
    resetState: () => void;
}

/**
 * @function createStore
 * @description Crea un store en Zustand con persistencia y devtools.
 * @template T - Tipo de estado inicial.
 * @param {string} name - Nombre del store para almacenamiento persistente.
 * @param {T} initialState - Estado inicial del store.
 * @returns {import('zustand').UseBoundStore<import('zustand').StoreApi<T & Actions>>} - Store de Zustand.
 */
export const createStore = <T extends State>(name: string, initialState: T): import('zustand').UseBoundStore<import('zustand').StoreApi<T & Actions>> =>
    create<T & Actions>()(
        devtools(
            persist(
                (set) => {
                    const defaultState = {
                        ...initialState,
                        /**
                         * @function setState
                         * @description Modifica una propiedad del estado.
                         * @param {string} key - Clave del estado a modificar.
                         * @param {any} value - Nuevo valor para la clave del estado.
                         */
                        setState: (key: string, value: any) =>
                            set((state) => ({ ...state, [key]: value })),

                        /**
                         * @function resetState
                         * @description Restablece el estado a su valor inicial.
                         */
                        resetState: () => set(() => defaultState),
                    };

                    return defaultState;
                },
                {
                    name, // Nombre en localStorage/sessionStorage
                    storage: createJSONStorage(() => localStorage), // Persistencia
                }
            )
        )
    );
