import { theme, ThemeConfig } from 'antd';
import colors from 'tailwindcss/colors';

const antdTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,

  token: {
    fontFamily: 'var(--font-sans)',
    borderRadius: 8,
    colorPrimary: 'var(--color-brand)',
    colorBorder: colors.gray[200],
    controlHeight: 42,
    fontSize: 16
  },

  components: {
    Dropdown: {
      paddingBlock: 8,
      fontSize: 16
    },

    Button: {
      defaultShadow: 'none',
      primaryShadow: 'none',
      paddingInline: 20,
      paddingInlineSM: 16,
      defaultBg: 'transparent'
    },

    Tag: {
      fontSizeSM: 15,
      colorBorder: colors.gray[200]
    },

    Form: {
      labelFontSize: 16,
      labelColor: colors.gray[700],
      labelHeight: 16,
      verticalLabelPadding: '0 0 4px',
      itemMarginBottom: 16
    },

    Input: {
      activeShadow: 'none',
      colorBorder: colors.gray[200],
      colorBgContainer: colors.white,
      colorTextPlaceholder: colors.gray[400],
      paddingInline: 16
    },

    DatePicker: {
      activeShadow: 'none',
      lineWidthBold: 0,
      colorBorder: colors.gray[200],
      cellActiveWithRangeBg: colors.gray[200],
      colorTextPlaceholder: colors.gray[400]
    },

    Pagination: {
      controlHeight: 38,
      colorText: colors.gray[500]
    },

    Select: {
      optionSelectedBg: 'rgb(0.1)',
      controlOutline: 'none',
      colorBorder: colors.gray[200],
      colorBgContainer: colors.white,
      optionFontSize: 15,
      colorTextPlaceholder: colors.gray[400]
    },

    Checkbox: {
      colorText: colors.gray[600],
      paddingXS: 12
    },

    Radio: {
      radioSize: 25,
      dotSize: 12
    },

    InputNumber: {
      colorBorder: colors.gray[200],
      colorBgContainer: colors.white,
      activeShadow: 'none',
      paddingInline: 16,
      colorTextPlaceholder: colors.gray[400]
    },

    Message: {
      contentPadding: '12px 16px',
      boxShadow: '0 1px 6px 0 #20212447'
    },

    Tooltip: {
      lineHeight: 1.3,
      paddingXS: 12,
      controlHeight: 10
    }
  }
};

export default antdTheme;
