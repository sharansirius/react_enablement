import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
  
  div.content_wrapper {
    &.dark {
        background: ${({ theme }) => theme.darkbg};
    }
    &.light {
        background: ${({ theme }) => theme.lightbg};
    }

    &.overlay {
        background: ${({ theme }) => theme.overlaybg};
    }
    &.selected {
        background: ${({ theme }) => theme.selectedItembg};
    }
  }`