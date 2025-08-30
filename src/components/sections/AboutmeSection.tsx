"use client";

import { Box, Button, Typography, useTheme } from "@mui/material";
import aboutme from "@/../public/aboutme.png";
import Image from "next/image";
import CustomButtonUi from "../ui/CustomButtonUi";

const AboutmeSection = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          bgcolor: theme.custom.colors.secondary.Misty_Rose,
          display: "flex",
          px: "1rem ",
        }}
      >
        {/* Aboutme Main */}
        <Box
          sx={{
            width: "70.1875rem",
            height: "auto",
            display: "flex",
            flexDirection: "row",
            mx: "auto",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              mt: "5rem",
            }}
          >
            <Typography
              variant="eczarSemi40"
              color={theme.custom.colors.neutral.Dark_Liver}
            >
              A Little Bit About Me
            </Typography>
            <Typography
              variant="workMedium20"
              color={theme.custom.colors.neutral.Chinese_Black}
            >
              I am Muhamad Leonardi from Indonesia. I have 6 months of
              internship experience in website development, where I explored
              both frontend and backend aspects as well as database management
              systems.
            </Typography>
            <Typography
              variant="workMedium20"
              color={theme.custom.colors.neutral.Chinese_Black}
            >
              I am particularly interested in building websites, working with
              DBMS, and backend development. Beyond that, I enjoy reading manga,
              reading books, playing and exploring games, and diving into new
              technologies and ecosystems — especially those closer to low-level
              systems.
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
          <Image src={aboutme} alt="aboutme" />
        </Box>
      </Box>
    </>
  );
};

export default AboutmeSection;
