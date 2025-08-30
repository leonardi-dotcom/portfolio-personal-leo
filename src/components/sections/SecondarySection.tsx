"use client";

import { Box, Typography, useTheme } from "@mui/material";

const SecondarySection = () => {
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
        py: { xs: "3rem", md: "8rem" },
        px: { xs: "1rem", md: "0" },
        overflow: "hidden",
      }}
    >
      {/* Title Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: { xs: "2rem", md: "4rem" },
          textAlign: "center",
        }}
      >
        <Typography
          variant="eczarSemi40"
          sx={{
            color: theme.custom.colors.neutral.Dark_Liver,
            fontSize: { xs: "2rem", md: "2.5rem" },
          }}
        >
          Some Generous Words
        </Typography>
        <Typography
          variant="workMedium20"
          sx={{
            color: theme.custom.colors.neutral.Chinese_Black,
            fontSize: { xs: "1rem", md: "1.25rem" },
            mt: { xs: "0.5rem", md: "1rem" },
          }}
        >
          Reflections from My Projects
        </Typography>
      </Box>

      {/* Content Section (Cards) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "2rem",
          width: { xs: "100%", md: "77.25rem" },
          mt: { xs: "2rem", md: "6rem" },
          alignItems: "stretch",
        }}
      >
        {/* Card 1 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: { xs: "1rem", md: "2rem" },
            borderRadius: "8px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            flexGrow: 1,
            flexBasis: 0,
          }}
        >
          <Typography
            variant="workBold20"
            sx={{
              color: theme.custom.colors.neutral.Dark_Liver,
              textAlign: "center",
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              mb: "1rem",
            }}
          >
            🕹️ Reflection Game Visual Novel Sang Saka Merah Putih
          </Typography>
          <Typography
            variant="workRegular20"
            sx={{
              color: theme.custom.colors.neutral.Chinese_Black,
              textAlign: "justify",
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
            “Melalui pembuatan game ini, saya belajar bagaimana menggabungkan
            narasi sejarah dengan interaksi visual. Tantangan terbesarnya adalah
            menjaga keseimbangan antara edukasi dan hiburan, supaya cerita tetap
            menarik tanpa kehilangan nilai informatifnya. Dari proses ini, saya
            jadi terbiasa merancang alur cerita yang runtut, mengatur aset
            visual, dan memastikan pengalaman pemain terasa menyatu.”
          </Typography>
        </Box>

        {/* Card 2 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: { xs: "1rem", md: "2rem" },
            borderRadius: "8px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            flexGrow: 1,
            flexBasis: 0,
          }}
        >
          <Typography
            variant="workBold20"
            sx={{
              color: theme.custom.colors.neutral.Dark_Liver,
              textAlign: "center",
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              mb: "1rem",
            }}
          >
            🛋️ Reflection - E-Furniture Adi Wangsa
          </Typography>
          <Typography
            variant="workRegular20"
            sx={{
              color: theme.custom.colors.neutral.Chinese_Black,
              textAlign: "justify",
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
            “Proyek e-furniture ini melatih saya untuk berpikir praktis dalam
            membuat desain sistem yang jelas dan mudah dipahami pengguna. Fokus
            saya adalah bagaimana menampilkan katalog produk dengan rapi
            sekaligus memberi pengalaman belanja digital yang nyaman. Dari sini,
            saya belajar pentingnya konsistensi tampilan, struktur navigasi yang
            sederhana, dan pemilihan warna yang mendukung identitas brand.”
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SecondarySection;
