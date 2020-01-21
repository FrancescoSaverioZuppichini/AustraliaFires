export default {
  app: {
    minHeight: "100vh",
    bg: "#EFEEEE"
  },
  card: {
    p: 4,
    bg: "#EFEEEE",
    boxShadow: "-9px -9px 9px rgba(255, 255, 255, 0.8), 9px 9px 9px #D1CDC7",
    borderRadius: 16
    // maxWidth: '500px'
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  header: {
    mb: 4,
    // height: "68px",
  },
  footer: {
    height: "54px",
    position: "absolute",
    bottom: "0",
    width: "100%"
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  shadows: {
    down: {
      boxShadow: "9px 9px 9px #D1CDC7"
    },
    up: {
      boxShadow: "-9px -9px 9px #D1CDC7"
    }
  },
  dark: {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    colors: {
      text: '#BABABA',
    },
    fonts: {
      body: 'system-ui, sans-serif',
      heading: 'inherit',
      monospace: 'Menlo, monospace',
    },
    app: {
      minHeight: "100vh",
      bg: "#373737"
    },
    card: {
      p: 4,
      borderRadius: 16,
      bg: "#373737",
      boxShadow: "-9px -9px 9px #4E4D4D, 9px 9px 9px #252525;"
    },

    shadows: {
      down: {
        boxShadow: "9px 9px 9px #252525"
      },
      up: {
        boxShadow: "-9px -9px 9px #252525"
      }
    }
  }
}
