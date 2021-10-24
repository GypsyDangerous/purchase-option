import { Box } from "@mui/system";

export const Type = () => {
    return (
        <Box>
            <h1>What are you trying to do?</h1>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <button>Buy A Home</button>
                <button>Sell my Home</button>
            </Box>
        </Box>
    );
};
