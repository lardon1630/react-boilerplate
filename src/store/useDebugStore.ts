import { create } from 'zustand';

interface DebugState {
  logs: string[];
  addLog: (log: string) => void;
}

export const useDebugStore = create<DebugState>((set) => ({
  logs: [],
  addLog: (log) =>
    set((state) => ({
      logs: [...state.logs, log],
    })),
}));
