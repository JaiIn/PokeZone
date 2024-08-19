import { create } from "zustand";

interface DarkModeState {
    isDarkMode: boolean;
    setDarkMode: () => void;
}

const useDarkModeStore = create<DarkModeState>((set) => ({
    isDarkMode: false,
    setDarkMode: () => set((state)=>({isDarkMode:!state.isDarkMode})),
}));

export default useDarkModeStore;