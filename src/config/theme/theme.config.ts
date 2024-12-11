import { Colors, Font, Spacing } from '../../types/styled-components'

export const color: Colors = {
  background: {
    dark: '#000000',
    normal: '#021125',
    light: '#0F2A4D',
  },
  primary: {
    dark: '#D6AE02',
    normal: '#FDD528',
    light: '#FFDE4F',
  },
  secondary: {
    dark: '#02060D',
    normal: '#0E1E33',
    light: '#253C59',
  },
  gray: {
    dark: '#3F5163',
    normal: '#6C7B8A',
    light: '#A4AAB0',
  },
  danger: {
    dark: '#D90000',
    normal: '#FF0000',
    light: '#FF2626',
  },
  success: {
    dark: '#0B7F26',
    normal: '#28A745',
    light: '#50CC6C',
  },
  info: {
    dark: '#007D91',
    normal: '#17A2B8',
    light: '#3CC8DE',
  },
  text: {
    dark: '#D9D9D9',
    normal: '#FFFFFF',
    light: '#FFFFFF',
  },
}

export const spacing: Spacing = {
  xxs: '4px',
  xs: '8px',
  s: '12px',
  m: '16px',
  l: '20px',
  xl: '24px',
  xxl: '32px',
}

export const font: Font = {
  size: {
    display: {
      normal: {
        mobile: '47px',
        tablet: '63px',
      },
    },
    heading: {
      normal: {
        h1: {
          mobile: '35px',
          tablet: '49px',
        },
        h2: {
          mobile: '29px',
          tablet: '39px',
        },
        h3: {
          mobile: '24px',
          tablet: '28px',
        },
      },
      h4: {
        mobile: '20px',
        tablet: '24px',
      },
      h5: {
        mobile: '17px',
        tablet: '20px',
      },
      h6: {
        mobile: '12px',
        tablet: '14px',
      },
    },
    body: {
      p: {
        mobile: '14px',
        tablet: '16px',
      },
      sub: {
        mobile: '12px',
        tablet: '14px',
      },
      c1: {
        mobile: '8px',
        tablet: '12px',
      },
      c2: {
        mobile: '6px',
        tablet: '8px',
      },
    },
  },
  weight: {
    regular: 400,
    medium: 500,
    bold: 700,
    extra: 800,
  },
}
