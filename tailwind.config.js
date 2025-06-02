import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem",
          small: "0.875rem",
          medium: "0.9375rem",
          large: "1.125rem",
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "6px", 
          medium: "8px", 
          large: "12px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        light: {
          colors: {
            background: {
              DEFAULT: "#f8f6f2" // Beige background
            },
            content1: {
              DEFAULT: "#FFFFFF",
              foreground: "#3c3428" // Brown text
            },
            content2: {
              DEFAULT: "#f0ece4", // Light beige
              foreground: "#3c3428"
            },
            content3: {
              DEFAULT: "#e4e0d8", // Darker beige
              foreground: "#3c3428"
            },
            content4: {
              DEFAULT: "#d8d4cc",
              foreground: "#3c3428"
            },
            divider: {
              DEFAULT: "rgba(60, 52, 40, 0.15)" // Brown with opacity
            },
            focus: {
              DEFAULT: "#5c8d5a" // Green focus
            },
            foreground: {
              DEFAULT: "#3c3428", // Brown text
              50: "#f8f6f2",
              100: "#f0ece4",
              200: "#e4e0d8",
              300: "#d8d4cc",
              400: "#a19884",
              500: "#7a725f",
              600: "#5c5547",
              700: "#3c3428",
              800: "#2a241c",
              900: "#1a160f"
            },
            primary: {
              DEFAULT: "#5c8d5a", // Green primary
              foreground: "#FFFFFF",
              50: "#f0f6ef",
              100: "#e0eddf",
              200: "#c1dbbf",
              300: "#a2c9a0",
              400: "#83b780",
              500: "#5c8d5a", // Main green
              600: "#4a7148",
              700: "#375536",
              800: "#253824",
              900: "#121c12"
            },
            secondary: {
              DEFAULT: "#8d6e5a", // Brown secondary
              foreground: "#FFFFFF",
              50: "#f6f2ef",
              100: "#ede5df",
              200: "#dbcbbf",
              300: "#c9b19f",
              400: "#b7977f",
              500: "#8d6e5a", // Main brown
              600: "#715848",
              700: "#554236",
              800: "#382c24",
              900: "#1c1612"
            },
            success: {
              DEFAULT: "#5c8d5a", // Same as primary
              foreground: "#FFFFFF",
              50: "#f0f6ef",
              100: "#e0eddf",
              200: "#c1dbbf",
              300: "#a2c9a0",
              400: "#83b780",
              500: "#5c8d5a",
              600: "#4a7148",
              700: "#375536",
              800: "#253824",
              900: "#121c12"
            },
            warning: {
              DEFAULT: "#c9a36e", // Beige warning
              foreground: "#000000",
              50: "#f9f5ef",
              100: "#f3ebdf",
              200: "#e7d7bf",
              300: "#dbc39f",
              400: "#c9a36e",
              500: "#b78d4d",
              600: "#93713e",
              700: "#6e552e",
              800: "#49381f",
              900: "#241c0f"
            },
            danger: {
              DEFAULT: "#a35c5a", // Reddish brown
              foreground: "#FFFFFF",
              50: "#f6efef",
              100: "#eddfdf",
              200: "#dbbfbf",
              300: "#c99f9e",
              400: "#b7807e",
              500: "#a35c5a",
              600: "#824a48",
              700: "#623736",
              800: "#412524",
              900: "#211212"
            },
            default: {
              DEFAULT: "#e4e0d8", // Beige default
              foreground: "#3c3428",
              50: "#f8f6f2",
              100: "#f0ece4",
              200: "#e4e0d8",
              300: "#d8d4cc",
              400: "#a19884",
              500: "#7a725f",
              600: "#5c5547",
              700: "#3c3428",
              800: "#2a241c",
              900: "#1a160f"
            }
          }
        }
      }
    })
  ]
}
