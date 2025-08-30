"use client";

import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const FooterSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        bgcolor: theme.custom.colors.secondary.Isabelline,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: { xs: "3rem", md: "5rem" },
        px: { xs: "1rem", sm: "2rem", md: "0" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "73.9375rem",
          height: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "center", md: "flex-end" },
          gap: { xs: "3rem", md: "0" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", md: "55rem" },
            display: "flex",
            flexDirection: "column",
            gap: { xs: "1rem", md: "2rem" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="eczarSemi64"
            color={theme.custom.colors.neutral.Dark_Liver}
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "4rem",
              },
            }}
          >
            Let’s work together and make everything super awsome and super
            useful.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              mt: "1.8rem",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Button
              component="a"
              href="https://www.linkedin.com/in/muhamad-leonardi-a16042252/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: { xs: "100%", sm: "16.875rem" },
                maxWidth: "16.875rem",
                p: { xs: "0.875rem 1rem", md: "1rem" },
                border: "4px solid #4E5E80",
                borderRadius: "1.5rem",
              }}
            >
              <Typography
                variant="workSemi24"
                color={theme.custom.colors.primary.Slate_Gray}
                sx={{
                  fontSize: {
                    xs: "1.125rem",
                    sm: "1.25rem",
                    md: "1.5rem",
                  },
                }}
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
            gap: { xs: "1rem", md: "0.5rem" },
            justifyContent: "center",
            width: { xs: "100%", md: "auto" },
          }}
        >
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/muhamad-leonardi-a16042252/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                color: theme.custom.colors.primary.Slate_Gray,
              }}
            />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/leonardi-dotcom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                color: theme.custom.colors.primary.Slate_Gray,
              }}
            />
          </IconButton>
          <IconButton
            href="/pdf/Resume.pdf"
            download="Resume_MuhamadLeonardi.pdf"
          >
            <PictureAsPdfIcon
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                color: theme.custom.colors.primary.Slate_Gray,
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterSection;
