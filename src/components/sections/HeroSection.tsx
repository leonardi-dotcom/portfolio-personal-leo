"use client";

import { Box, Button, Typography, useTheme } from "@mui/material";
import HeroImage from "@/../public/hero.png";
import Image from "next/image";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
const HeroSection = () => {
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
        {/* Hero | */}
        <Box
          sx={{
            width: "73.9375rem",
            height: "41.25rem",
            display: "flex",
            flexDirection: "row",
            mx: "auto",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "37.75rem",
              height: "28rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Hero | Hello all */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                alignItems: "center",
                mb: "1rem",
                bgcolor: theme.custom.colors.secondary.Misty_Rose,
                width: "fit-content",
                p: "1rem",
                borderRadius: "1rem",
              }}
            >
              <WavingHandIcon sx={{ color: "yellow" }} />
              <Typography
                variant="workSemi24"
                color={theme.custom.colors.neutral.Chinese_Black}
              >
                Hello All
              </Typography>
            </Box>
            <Typography
              variant="eczarSemi64"
              color={theme.custom.colors.neutral.Dark_Liver}
            >
              I’m Muhamad Leonardi, A Software Engineer
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
                component="a"
                href="https://github.com/leonardi-dotcom"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: "16.875rem",
                  bgcolor: theme.custom.colors.primary.Glaucous,
                  p: "1rem",
                  borderRadius: "1.5rem",
                }}
              >
                <Typography
                  variant="workSemi24"
                  color={theme.custom.colors.neutral.Lavender_Blush}
                >
                  View My Work
                </Typography>
                <ExpandCircleDownIcon
                  sx={{
                    color: theme.custom.colors.neutral.Lavender_Blush,
                    transform: "rotate(-90deg)",
                    transition: "transform 0.3s ease",
                    ml: "0.5rem",
                  }}
                />
              </Button>
              <Button
                component="a"
                href="https://www.linkedin.com/in/muhamad-leonardi-a16042252/"
                target="_blank"
                rel="noopener noreferrer"
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
          <Image src={HeroImage} alt="Hero image" priority />
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
