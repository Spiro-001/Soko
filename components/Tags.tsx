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
        background: "rgb(55 135 255)",
        height: "100%",
        display: "flex",
        padding: "3px 10px",
        margin: "0 0.5rem 0.4rem 0",
        justifyContent: "center",
        alignContent: "center",
        color: "#ffffff",
        whiteSpace: "nowrap",
        borderRadius: "6px",
      }}
    >
      <Stack direction="row" gap={1} className="items-center">
        <Typography>{data}</Typography>
        <Cancel
          sx={{ cursor: "pointer", height: 18 }}
          onClick={() => {
            handleDelete(data);
          }}
        />
      </Stack>
    </Box>
  );
};
