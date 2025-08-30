"use client";

import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const FooterSection = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          bgcolor: theme.custom.colors.secondary.Isabelline,
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "73.9375rem",
            height: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            mx: "auto",
            mt: "5rem",
            mb: "5rem",
          }}
        >
          <Box
            sx={{
              width: "55rem",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <Typography
              variant="eczarSemi64"
              color={theme.custom.colors.neutral.Dark_Liver}
            >
              Let’s work together and make everything super awsome and super
              useful.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                mt: "1.8rem",
              }}
            >
              <Button
                sx={{
                  width: "16.875rem",
                  p: "1rem",
                  border: "4px solid #4E5E80",
                  borderRadius: "1.5rem",
                }}
              >
                <Typography
                  variant="workSemi24"
                  color={theme.custom.colors.primary.Slate_Gray}
                >
                  Contact Me
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <IconButton>
              <LinkedInIcon
                sx={{
                  fontSize: "3rem",
                  color: theme.custom.colors.primary.Slate_Gray,
                }}
              />
            </IconButton>
            <IconButton>
              <GitHubIcon
                sx={{
                  fontSize: "3rem",
                  color: theme.custom.colors.primary.Slate_Gray,
                }}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FooterSection;
