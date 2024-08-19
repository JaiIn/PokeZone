import { create } from "zustand";

interface GenerationState {
    selectedGeneration: number;
    setGeneration:(id:number)=>void;
}

const useGenerations = create<GenerationState>((set) =>({
    selectedGeneration:1,
    setGeneration:(id:number)=>(set({selectedGeneration:id})),
}));

export default useGenerations;