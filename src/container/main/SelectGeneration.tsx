import styled from "styled-components";
import useGenerations from "../../zustand/useGenerations";
import { Generation } from "../../components/Generation";

const SelectGeneration = () => {

    const selectedGeneration = useGenerations((state)=>state.selectedGeneration);
    const setGeneration = useGenerations((state)=>state.setGeneration);

    return (
        <Selection value={selectedGeneration} onChange={(e)=>setGeneration(Number(e.target.value))}>
            {Generation.map((gen) => (
                <option key={gen.id} value={gen.id}>
                    {gen.name}
                </option>
            ))}
        </Selection>
    );
};

export default SelectGeneration;

const Selection = styled.select`
    
`