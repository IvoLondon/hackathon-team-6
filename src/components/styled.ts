import { IconSnippet } from '@vfuk/core-icon-snippet'
import { ThemeProps } from './../types/index'
import { StyledResponseProps } from './Chat.types'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { SimpleCard } from '@vfuk/core-simple-card'
import ContentfulRichTextCore from '@vfuk/core-contentful-rich-text'

export const ResponseContainer = styled.div(
  ({ theme }: ThemeProps): FlattenSimpleInterpolation => {
    return css`
      display: flex;
      flex-direction: column;
      width: 100%;
      flex: 1;
    `
  }
)

export const User = styled.div(
  ({ theme, chatType }: StyledResponseProps): FlattenSimpleInterpolation => {
    return css`
      display: flex;
      width: auto;
      margin: 1rem 0;
      align-self: end;
      & > div > div > div {
        border-radius: 8px 0 8px 8px;

        & [data-component-name='Heading'] {
          font-size: ${theme.typography.heading[1].fontTablet};
          font-weight: ${theme.typography.heading[3].fontWeight};
        }
      }
    `
  }
)
export const Response = styled.div(
  ({ theme, chatType }: StyledResponseProps): FlattenSimpleInterpolation => {
    return css`
      width: auto;
      max-width: 75%;
      align-self: start;
      display: flex;
      align-items: center;

      & > div > div > div {
        border-radius: 0 8px 8px 8px;

        & [data-component-name='Heading'] {
          font-size: ${theme.typography.heading[1].fontTablet};
          font-weight: ${theme.typography.heading[3].fontWeight};
        }
      }
    `
  }
)
