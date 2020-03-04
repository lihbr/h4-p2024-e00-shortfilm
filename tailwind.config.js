module.exports = {
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    fontFamily: {
      main: [
        "Helvetica Neue",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol"
      ],
      sub: [
        "Atlas Grotesk",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol"
      ],
      mono: [
        "SFMono-Regular",
        "Menlo",
        "Consolas",
        "Liberation Mono",
        "Courier",
        "monospace"
      ]
    },
    colors: {
      none: "transparent",
      transparent: "transparent",
      inherit: "inherit",
      black: {
        default: "#212121",
        200: "#b1b1b1",
        "o-96": "rgba(33, 33, 33, 0.96)"
      },
      white: {
        default: "#fefefe"
      },
      red: {
        default: "#9f0400"
      }
    },
    fontSize: {
      "3xs": "0.5rem", //   8px
      "2xs": "0.625rem", // 10px
      xs: "0.75rem", //     12px
      s: "0.875rem", //     14px
      m: "1rem", //         16px
      l: "1.125rem", //     18px
      xl: "1.25rem", //     20px
      "2xl": "1.5rem", //   24px
      "3xl": "1.75rem", //  28px
      "4xl": "2rem", //     32px
      "5xl": "2.25rem", //  36px
      "6xl": "2.75rem", //  44px
      "7xl": "3.25rem", //  52px
      "8xl": "4rem", //     64px
      "9xl": "4.5rem", //   72px
      "10xl": "5rem" //     80px
    },
    extend: {
      spacing: {
        "5/2": "10px",
        "-5/2": "-10px",
        semicol: "60px"
      }
    }
  },
  variants: {},
  corePlugins: {
    objectFit: false,
    objectPosition: false
  },
  plugins: [
    ({ addBase, addUtilities, theme }) => {
      addBase({
        strong: { fontWeight: theme("fontWeight.bold") }
      });

      const objectFitUtilities = {
        ".object-cover": {
          objectFit: "cover",
          fontFamily: '"object-fit: cover"' // eslint-disable-line
        },
        ".object-contain": {
          objectFit: "contain",
          fontFamily: '"object-fit: contain"' // eslint-disable-line
        }
      };
      addUtilities(objectFitUtilities, {
        variants: ["responsive"]
      });

      const flexUtilities = {
        ".flex-center": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }
      };
      addUtilities(flexUtilities, {
        variants: ["responsive"]
      });

      const transformUtilities = {
        ".transform-center": {
          transform: "translate(-50%, -50%)"
        },
        ".transform-center-x": {
          transform: "translate(-50%, 0)"
        },
        ".transform-center-y": {
          transform: "translate(0, -50%)"
        }
      };
      addUtilities(transformUtilities, {
        variants: ["responsive"]
      });
    }
  ]
}
