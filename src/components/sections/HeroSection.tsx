"use client";

import { Box, Button, Typography, useTheme } from "@mui/material";
import HeroImage from "@/../public/hero.png";
import Image from "next/image";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { motion } from "framer-motion";
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
              {/* Text muncul dari bawah */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Typography
                  variant="workSemi24"
                  color={theme.custom.colors.neutral.Chinese_Black}
                >
                  Hello, All 👋
                </Typography>
              </motion.div>
            </Box>
            {/* Title animasi dari kiri */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              <Typography
                variant="eczarSemi64"
                color={theme.custom.colors.neutral.Dark_Liver}
              >
                I’m Muhamad Leonardi, A Software Engineer
              </Typography>
            </motion.div>
            {/* Tombol muncul dengan delay */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
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
            </motion.div>
          </Box>
          <Image src={HeroImage} alt="Hero image" priority />
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
