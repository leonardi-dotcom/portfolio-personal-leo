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
          px: { xs: 2, sm: 3, md: 0 },
          overflow: "hidden",
        }}
      >
        {/* Hero Container */}
        <Box
          sx={{
            width: { xs: "100%", lg: "73.9375rem" },
            height: "auto",
            minHeight: { xs: "auto", lg: "41.25rem" },
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            mx: "auto",
            alignItems: "center",
            justifyContent: "space-between",
            py: { xs: 4, md: 6, lg: 0 },
            gap: { xs: 4, md: 6, lg: 0 },
          }}
        >
          {/* Text Content */}
          <Box
            sx={{
              width: { xs: "100%", lg: "37.75rem" },
              height: "auto",
              display: "flex",
              flexDirection: "column",
              order: { xs: 2, lg: 1 },
            }}
          >
            {/* Hello Section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                alignItems: "center",
                mb: { xs: "1.5rem", md: "1rem" },
                bgcolor: theme.custom.colors.secondary.Misty_Rose,
                width: "fit-content",
                p: { xs: "0.75rem 1rem", md: "1rem" },
                borderRadius: "1rem",
                mx: { xs: "auto", lg: 0 },
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Typography
                  variant="workSemi24"
                  sx={{
                    fontSize: { xs: "1.125rem", md: "1.5rem" },
                    textAlign: { xs: "center", lg: "left" },
                  }}
                  color={theme.custom.colors.neutral.Chinese_Black}
                >
                  Hello, All 👋
                </Typography>
              </motion.div>
            </Box>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              <Typography
                variant="eczarSemi64"
                sx={{
                  fontSize: {
                    xs: "2rem",
                    sm: "2.5rem",
                    md: "3rem",
                    lg: "4rem",
                  },
                  lineHeight: { xs: 1.2, md: 1.3 },
                  textAlign: { xs: "center", lg: "left" },
                  mb: { xs: 2, lg: 0 },
                }}
                color={theme.custom.colors.neutral.Dark_Liver}
              >
                I'm Muhamad Leonardi, A Software Engineer
              </Typography>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: "1rem", sm: "1rem" },
                  mt: { xs: "2rem", lg: "1.8rem" },
                  alignItems: "center",
                  justifyContent: { xs: "center", lg: "flex-start" },
                }}
              >
                <Button
                  component="a"
                  href="https://github.com/leonardi-dotcom"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: { xs: "100%", sm: "16.875rem" },
                    maxWidth: "16.875rem",
                    bgcolor: theme.custom.colors.primary.Glaucous,
                    p: { xs: "0.875rem 1rem", md: "1rem" },
                    borderRadius: "1.5rem",
                    "&:hover": {
                      bgcolor: theme.custom.colors.primary.Glaucous,
                      opacity: 0.9,
                    },
                  }}
                >
                  <Typography
                    variant="workSemi24"
                    sx={{
                      fontSize: { xs: "1rem", md: "1.5rem" },
                    }}
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
                      fontSize: { xs: "1.25rem", md: "1.5rem" },
                    }}
                  />
                </Button>

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
                    "&:hover": {
                      backgroundColor: "rgba(78, 94, 128, 0.1)",
                    },
                  }}
                >
                  <Typography
                    variant="workSemi24"
                    sx={{
                      fontSize: { xs: "1rem", md: "1.5rem" },
                    }}
                    color={theme.custom.colors.primary.Slate_Gray}
                  >
                    Contact Me
                  </Typography>
                </Button>
              </Box>
            </motion.div>
          </Box>

          {/* Hero Image */}
          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "60%", lg: "auto" },
              maxWidth: { xs: "20rem", sm: "24rem", md: "28rem" },
              height: "auto",
              display: "flex",
              justifyContent: "center",
              order: { xs: 1, lg: 2 },
            }}
          >
            <Image
              src={HeroImage}
              alt="Hero image"
              priority
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "100%",
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
