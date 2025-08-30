"use client";

import { Box, Typography, useTheme } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const SecondarySection = () => {
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
        {/* Words Main Section */}
        <Box
          sx={{
            width: "77.25rem",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            mx: "auto",
            mt: "5rem",
            mb: "8rem",
          }}
        >
          {/* Words Main Section | title*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: "4rem",
            }}
          >
            <Typography
              variant="eczarSemi40"
              color={theme.custom.colors.neutral.Dark_Liver}
            >
              Some Generous Words
            </Typography>
            <Typography
              variant="workMedium20"
              color={theme.custom.colors.neutral.Chinese_Black}
            >
              Reflections from My Projects
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "2rem",
              width: "100%",
              mt: "6rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                }}
              >
                <Typography
                  variant="workBold20"
                  color={theme.custom.colors.neutral.Dark_Liver}
                  align="center"
                >
                  🕹️ Reflection Game Visual Novel Sang Saka Merah Putih
                </Typography>
                <Typography
                  variant="workRegular20"
                  color={theme.custom.colors.neutral.Chinese_Black}
                  align="center"
                >
                  “Melalui pembuatan game ini, saya belajar bagaimana
                  menggabungkan narasi sejarah dengan interaksi visual.
                  Tantangan terbesarnya adalah menjaga keseimbangan antara
                  edukasi dan hiburan, supaya cerita tetap menarik tanpa
                  kehilangan nilai informatifnya. Dari proses ini, saya jadi
                  terbiasa merancang alur cerita yang runtut, mengatur aset
                  visual, dan memastikan pengalaman pemain terasa menyatu.”
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                }}
              >
                <Typography
                  variant="workBold20"
                  color={theme.custom.colors.neutral.Dark_Liver}
                  align="center"
                >
                  🛋️ Reflection - E-Furniture Adi Wangsa
                </Typography>
                <Typography
                  variant="workRegular20"
                  color={theme.custom.colors.neutral.Chinese_Black}
                  align="center"
                >
                  “Proyek e-furniture ini melatih saya untuk berpikir praktis
                  dalam membuat desain sistem yang jelas dan mudah dipahami
                  pengguna. Fokus saya adalah bagaimana menampilkan katalog
                  produk dengan rapi sekaligus memberi pengalaman belanja
                  digital yang nyaman. Dari sini, saya belajar pentingnya
                  konsistensi tampilan, struktur navigasi yang sederhana, dan
                  pemilihan warna yang mendukung identitas brand.”
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SecondarySection;
