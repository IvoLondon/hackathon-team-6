import { ThemeProps } from './../types/index'
import { StyledResponseProps } from './Chat.types'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

export const ResponseContainer = styled.div(
  ({ theme }: ThemeProps): FlattenSimpleInterpolation => {
    return css`
      padding: 4px;
    `
  }
)

export const Response = styled.div(
  ({ theme, chatType }: StyledResponseProps): FlattenSimpleInterpolation => {
    return css`
      font-weight: ${chatType ? theme.fontWeight[1] : theme.fontWeight[3]};
      padding: 4px;
    `
  }
)
