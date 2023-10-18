import { Cancel } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

export const Tags = ({
  data,
  handleDelete,
}: {
  data: string;
  handleDelete: (data: string) => void;
}) => {
  return (
    <Box
      sx={{
        background: "black",
        height: "100%",
        display: "flex",
        padding: "6px 12px",
        margin: "0 0.5rem 0.3rem 0",
        justifyContent: "center",
        alignContent: "center",
        color: "#ffffff",
        whiteSpace: "nowrap",
        borderRadius: "6px",
      }}
    >
      <Stack direction="row" gap={1}>
        <Typography>{data}</Typography>
        <Cancel
          sx={{ cursor: "pointer" }}
          onClick={() => {
            handleDelete(data);
          }}
        />
      </Stack>
    </Box>
  );
};
