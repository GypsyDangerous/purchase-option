import { Box } from "@mui/system";
import styled from "styled-components";

const Input = styled.input`
    display: none;
    &:checked + label {
        outline: 3px solid #077ae5;
        box-shadow: none;
    }
`;

const Label = styled.label`
    padding: 2.5rem 6.5rem;
    max-width: fit-content;
    border-radius: 0.25rem;
    text-align: center;
    background: white;
    box-shadow: 5px 5px 10px 0 rgb(7 122 229 / 20%);
`;

const H1 = styled.h1`
    font-size: 3rem;
    margin-bottom: 2rem;
`;

export const Type = () => {
    return (
        <Box>
            <H1>What are you trying to do?</H1>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "2rem",
                }}
            >
                <Input type="radio" name="type" id="buy" />
                <Label htmlFor="buy">Buy A Home</Label>
                <Input type="radio" name="type" id="sell" />
                <Label htmlFor="sell">Sell A Home</Label>
            </Box>
        </Box>
    );
};
