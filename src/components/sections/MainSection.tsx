"use client";

import { Box, Card, Typography, useTheme } from "@mui/material";
import RecentWork01 from "@/../public/recentWork01.png";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

const MainSection = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        bgcolor: theme.custom.colors.secondary.Misty_Rose,
        px: { xs: 2, sm: 3, md: 0 },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", lg: "71.375rem" },
          height: "auto",
          display: "flex",
          flexDirection: "column",
          mx: "auto",
          mt: { xs: "3rem", md: "4rem", lg: "5rem" },
          mb: { xs: "3rem", md: "4rem", lg: "5rem" },
          gap: { xs: "1.5rem", md: "2rem" },
        }}
      >
        {/* Title */}
        <Typography
          variant="eczarSemi40"
          sx={{
            fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem", lg: "2.5rem" },
            textAlign: { xs: "center", lg: "left" },
            mb: { xs: "1rem", lg: 0 },
          }}
          color={theme.custom.colors.neutral.Dark_Liver}
        >
          My Recent Work
        </Typography>

        {/* Card 1 */}
        <MotionCard
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            bgcolor: theme.custom.colors.neutral.Baby_Powder,
            borderRadius: "1.5rem",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "0.75rem", md: "1rem" },
              p: { xs: "2rem 1.5rem", sm: "3rem 2rem", md: "4rem" },
              order: { xs: 2, md: 1 },
              flex: 1,
            }}
          >
            <Typography
              variant="workSemi32"
              sx={{
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
                lineHeight: { xs: 1.3, md: 1.4 },
                textAlign: { xs: "center", md: "left" },
              }}
              color={theme.custom.colors.neutral.Dark_Liver}
            >
              Sang Saka Merah Putih
            </Typography>
            <Typography
              variant="workMedium24"
              sx={{
                fontSize: { xs: "0.875rem", sm: "1rem", md: "1.5rem" },
                lineHeight: { xs: 1.4, md: 1.5 },
                textAlign: { xs: "center", md: "left" },
              }}
              color={theme.custom.colors.neutral.Chinese_Black}
            >
              Game visual novel interaktif mengisahkan sejarah Sang Saka Merah
              Putih dengan narasi edukatif.
            </Typography>
            <Typography
              variant="workSemi24"
              sx={{
                fontSize: { xs: "1rem", md: "1.5rem" },
                cursor: "pointer",
                textAlign: { xs: "center", md: "left" },
                "&:hover": { textDecoration: "underline" },
              }}
              color={theme.custom.colors.primary.Glaucous}
            >
              View Case Study
            </Typography>
          </Box>

          {/* Image Container */}
          <Box
            sx={{
              width: { xs: "100%", md: "auto" },
              height: { xs: "12rem", sm: "16rem", md: "auto" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              order: { xs: 1, md: 2 },
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image
              src={RecentWork01}
              alt="Sang Saka Merah Putih project image"
              priority
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                maxWidth: "100%",
              }}
            />
          </Box>
        </MotionCard>

        {/* Card 2 */}
        <MotionCard
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            bgcolor: theme.custom.colors.neutral.Baby_Powder,
            borderRadius: "1.5rem",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "0.75rem", md: "1rem" },
              p: { xs: "2rem 1.5rem", sm: "3rem 2rem", md: "4rem" },
              order: { xs: 2, md: 1 },
              flex: 1,
            }}
          >
            <Typography
              variant="workSemi32"
              sx={{
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
                lineHeight: { xs: 1.3, md: 1.4 },
                textAlign: { xs: "center", md: "left" },
              }}
              color={theme.custom.colors.neutral.Dark_Liver}
            >
              Building Adi Wangsa: An E-Furniture Platform
            </Typography>
            <Typography
              variant="workMedium24"
              sx={{
                fontSize: { xs: "0.875rem", sm: "1rem", md: "1.5rem" },
                lineHeight: { xs: 1.4, md: 1.5 },
                textAlign: { xs: "center", md: "left" },
              }}
              color={theme.custom.colors.neutral.Chinese_Black}
            >
              Proyek e-commerce yang sedang berjalan. Menggunakan Go dan React
              untuk pengalaman pengguna yang mulus. (Work in progress)
            </Typography>
            <Typography
              variant="workSemi24"
              sx={{
                fontSize: { xs: "1rem", md: "1.5rem" },
                cursor: "pointer",
                textAlign: { xs: "center", md: "left" },
                "&:hover": { textDecoration: "underline" },
              }}
              color={theme.custom.colors.primary.Glaucous}
            >
              View Case Study
            </Typography>
          </Box>

          {/* Image Container */}
          <Box
            sx={{
              width: { xs: "100%", md: "auto" },
              height: { xs: "12rem", sm: "16rem", md: "auto" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              order: { xs: 1, md: 2 },
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image
              src={RecentWork01}
              alt="Adi Wangsa E-Furniture project image"
              priority
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                maxWidth: "100%",
              }}
            />
          </Box>
        </MotionCard>
      </Box>
    </Box>
  );
};

export default MainSection;
