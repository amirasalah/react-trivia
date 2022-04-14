import create from "zustand";

export const useStore = create<IUseStore>((set) => ({
  currentStep: 1,
  finalScore: 0,
  results: [],
  finished: false,
  incrementFinalScore: () =>
    set((state) => ({ finalScore: state.finalScore + 1 })),
  incrementStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  setResults: (question) =>
    set((state) => ({ results: [...state.results, question] })),
  setFinished: () => set(() => ({ finished: true })),
}));
