"use client";
import { Box, Button, Typography, useTheme } from "@mui/material";
import aboutme from "@/../public/aboutme.png";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutmeSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: theme.custom.colors.secondary.Misty_Rose,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: { xs: "2.5rem", md: "5rem" },
        px: { xs: "1.25rem", sm: "2rem", md: "4rem" },
      }}
    >
      {/* Aboutme Main Container */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "70.1875rem",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: "2rem", md: "4rem" },
        }}
      >
        {/* LEFT SIDE TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ width: "100%" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "1rem", md: "1.5rem" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="eczarSemi40"
              color={theme.custom.colors.neutral.Dark_Liver}
              sx={{
                fontSize: {
                  xs: "1.75rem",
                  sm: "2rem",
                  md: "2.5rem",
                },
              }}
            >
              A Little Bit About Me
            </Typography>

            <Typography
              variant="workMedium20"
              color={theme.custom.colors.neutral.Chinese_Black}
              sx={{
                fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                lineHeight: 1.7,
              }}
            >
              I am Muhamad Leonardi from Indonesia. I have 6 months of
              internship experience in website development, where I explored
              both frontend and backend aspects as well as database management
              systems.
            </Typography>

            <Typography
              variant="workMedium20"
              color={theme.custom.colors.neutral.Chinese_Black}
              sx={{
                fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                lineHeight: 1.7,
              }}
            >
              I am particularly interested in building websites, working with
              DBMS, and backend development. Beyond that, I enjoy reading manga,
              reading books, playing and exploring games, and diving into new
              technologies and ecosystems — especially those closer to low-level
              systems.
            </Typography>

            {/* Button */}
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                mt: { xs: "1.5rem", md: "2rem" },
              }}
            >
              <Button
                component="a"
                href="https://www.linkedin.com/in/muhamad-leonardi-a16042252/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: { xs: "100%", sm: "auto" },
                  maxWidth: "16.875rem",
                  px: { xs: "1.5rem", md: "2rem" },
                  py: { xs: "0.75rem", md: "1rem" },
                  border: "4px solid #4E5E80",
                  borderRadius: "1.5rem",
                }}
              >
                <Typography
                  variant="workSemi24"
                  color={theme.custom.colors.primary.Slate_Gray}
                  sx={{
                    fontSize: {
                      xs: "1.125rem", // ~18px
                      sm: "1.25rem", // ~20px
                      md: "1.5rem", // ~24px
                    },
                  }}
                >
                  Contact Me
                </Typography>
              </Button>
            </Box>
          </Box>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ width: "100%" }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: { xs: "52%", md: "35rem" },
              mx: "auto",
            }}
          >
            <Image
              src={aboutme}
              alt="Muhamad Leonardi"
              width={700}
              height={700}
              style={{ width: "100%", height: "auto", borderRadius: "1rem" }}
            />
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default AboutmeSection;
