import { create } from "zustand";
import arrow from "../assets/arrow.svg";
import arrow1 from "../assets/arrow1.svg";

const x = [arrow, arrow1];

const useStore = create((set) => ({
  showButton: false,
  arrowImage: x[0],
  count: 0,
  num: 0,
  num1:0,
  proj: false,

  setProj: (proj) => set({ proj }),
  setNum: (num) => set({ num }),
  setNum1: (num1) => set({ num1 }),

  toggleProj: () => set((state) => ({ proj: !state.proj, num1: 0 })),

  handleDivClick: () =>
    set(() => ({
      showButton: true,
      arrowImage: x[1],
    })),

  handleClick: () =>
    set((state) => {
      if (!state.showButton) {
        event.preventDefault();
        return;
      }

      return Count(1);
    }),
}));

export default useStore;
