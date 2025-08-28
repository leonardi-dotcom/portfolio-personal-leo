import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";
import { typography } from "./typography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    workSemi32: React.CSSProperties;
    workSemi24: React.CSSProperties;
    workSemi20: React.CSSProperties;
    workMedium24: React.CSSProperties;
    workBold20: React.CSSProperties;
    workMedium20: React.CSSProperties;
    workRegular20: React.CSSProperties;
    eczarSemi64: React.CSSProperties;
    eczarSemi40: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    workSemi32?: React.CSSProperties;
    workSemi24?: React.CSSProperties;
    workSemi20: React.CSSProperties;
    workMedium24?: React.CSSProperties;
    workBold20?: React.CSSProperties;
    workMedium20?: React.CSSProperties;
    workRegular20?: React.CSSProperties;
    eczarSemi64?: React.CSSProperties;
    eczarSemi40?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    workSemi32: true;
    workSemi24: true;
    workSemi20: true;
    workMedium24: true;
    workBold20: true;
    workMedium20: true;
    workRegular20: true;
    eczarSemi64: true;
    eczarSemi40: true;
  }
}

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      colors: typeof colors;
    };
  }
  interface ThemeOptions {
    custom?: {
      colors?: typeof colors;
    };
  }
}

export const theme = createTheme({
  typography: {
    ...typography,
  },
  custom: {
    colors,
  },
});
