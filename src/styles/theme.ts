interface Color {
  white: string;
  black: string;
  gray: string;
  orange: string;
}

interface Theme {
  color: Color;
  bold: string;
}

const theme: Theme = {
  bold: "700",
  color: {
    white: "#FFFFFF",
    black: "#000000",
    gray: "#D6D2D0",
    orange: "#F24516",
  },
};

export default theme;
