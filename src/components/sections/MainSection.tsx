"use client";

import { Box, Card, Typography, useTheme } from "@mui/material";
import RecentWork01 from "@/../public/recentWork01.png";
import Image from "next/image";

const MainSection = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          bgcolor: theme.custom.colors.secondary.Misty_Rose,
        }}
      >
        <Box
          sx={{
            width: "71.375rem",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            mx: "auto",
            mt: "5rem",
            mb: "5rem",
            gap: "2rem",
          }}
        >
          {/* Main Section | */}
          <Typography
            variant="eczarSemi40"
            color={theme.custom.colors.neutral.Dark_Liver}
          >
            My Recent Work
          </Typography>
          <Card
            sx={{
              width: "71.375rem",
              height: "auto",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              bgcolor: theme.custom.colors.neutral.Baby_Powder,
              borderRadius: "1.5rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                p: "4rem",
              }}
            >
              <Typography
                variant="workSemi32"
                color={theme.custom.colors.neutral.Dark_Liver}
              >
                Sang Saka Merah Putih
              </Typography>
              <Typography
                variant="workMedium24"
                color={theme.custom.colors.neutral.Chinese_Black}
              >
                Game visual novel interaktif mengisahkan sejarah Sang Saka Merah
                Putih dengan narasi edukatif.
              </Typography>
              <Typography
                variant="workSemi24"
                color={theme.custom.colors.primary.Glaucous}
              >
                View Case Study
              </Typography>
            </Box>
            <Image src={RecentWork01} alt="Hero image" priority />
          </Card>
          <Card
            sx={{
              width: "71.375rem",
              height: "auto",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              bgcolor: theme.custom.colors.neutral.Baby_Powder,
              borderRadius: "1.5rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                p: "4rem",
              }}
            >
              <Typography
                variant="workSemi32"
                color={theme.custom.colors.neutral.Dark_Liver}
              >
                Building Adi Wangsa: An E-Furniture Platform
              </Typography>
              <Typography
                variant="workMedium24"
                color={theme.custom.colors.neutral.Chinese_Black}
              >
                Proyek e-commerce yang sedang berjalan. Menggunakan Go dan React
                untuk pengalaman pengguna yang mulus. (Work in progress)
              </Typography>
              <Typography
                variant="workSemi24"
                color={theme.custom.colors.primary.Glaucous}
              >
                View Case Study
              </Typography>
            </Box>
            <Image src={RecentWork01} alt="Hero image" priority />
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default MainSection;
