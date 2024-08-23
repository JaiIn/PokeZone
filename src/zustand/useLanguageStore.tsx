import { create } from "zustand";

interface LanguageState{
    isKorean: string;
    toEnglish: () => void;
    toKorean: () => void;
}

const useLanguageStore = create<LanguageState>((set)=>({
    isKorean: 'ko',
    toEnglish:()=>(set({isKorean:'en'})),
    toKorean: () => (set({isKorean:'ko'})),
}));

export default useLanguageStore;