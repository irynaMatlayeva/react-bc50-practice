import styled from '@emotion/styled';
import { ErrorMessage, Field } from 'formik';


export const ErrorMessageStyled = styled(ErrorMessage)`
    color: red;
    font-size: 12px;
    margin-left: 40px;
    margin-bottom: 36px;
    display: block;
`;

export const FieldStyled = styled(Field)`
    margin-left: 24px;
    width: 488px;
    padding: 12px 75px 12px 16px;
    font-size: 16px;
    line-height: 24px;
    color: #757575;
    border: 1px solid #757575;
`;