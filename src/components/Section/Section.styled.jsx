import styled from 'styled-components';

export const SectionStyled = styled.section`
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 14px;
    text-transform: uppercase;
  }

  .title_right {
    justify-content: flex-end;
  }

  .section_row {
    display: ${({isRow}) => isRow ? `flex` : `block`};
    align-items: ${({isRow}) => isRow ? `center` : `inherit`};
    gap: 32px;
  }
`;
