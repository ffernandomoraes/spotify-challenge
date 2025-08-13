import { theme, ThemeConfig } from 'antd';
import colors from 'tailwindcss/colors';

const antdTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,

  token: {
    fontFamily: 'var(--font-sans)',
    borderRadius: 24,
    colorPrimary: '#1DB954',
    colorBorder: 'var(--color-elevated-base)',
    controlHeight: 50,
    fontSize: 16
  },

  components: {
    Dropdown: {
      paddingBlock: 8,
      fontSize: 16
    },

    Button: {
      fontWeight: 500,
      defaultShadow: 'none',
      primaryShadow: 'none',
      paddingInline: 20,
      paddingInlineSM: 16,
      primaryColor: '#000',
      defaultBg: 'var(--color-elevated-base)',
      defaultHoverBg: 'var(--color-elevated-highlight)',
      defaultHoverBorderColor: 'var(--color-elevated-highlight)',
      colorBgContainerDisabled: 'var(--color-elevated-base)',
      colorPrimaryHover: colors.white
    },

    Input: {
      activeShadow: 'none',
      paddingInline: 20,
      colorBgContainer: 'var(--color-elevated-base)',
      hoverBg: 'var(--color-elevated-highlight)',
      activeBg: 'var(--color-elevated-highlight)',
      hoverBorderColor: 'var(--color-elevated-highlight)',
      activeBorderColor: 'var(--color-elevated-highlight)'
    },

    Pagination: {
      controlHeight: 38,
      colorText: colors.gray[500]
    },

    Tooltip: {
      lineHeight: 1.25,
      paddingXS: 12,
      controlHeight: 10,
      colorBgSpotlight: 'var(--color-elevated-base)',
      fontSize: 14
    },

    Tag: {
      defaultBg: 'var(--color-elevated-base)',
      colorBorder: 'var(--color-elevated-base)',
      colorText: colors.gray[400]
    }
  }
};

export default antdTheme;
