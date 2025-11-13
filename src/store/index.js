import { create } from "zustand";

const firstNum = 1;

export const useBear = create((set) => ({
  bears: firstNum,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));
