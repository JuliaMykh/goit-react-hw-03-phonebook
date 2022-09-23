import styled from "@emotion/styled";

export const LabelForm = styled.label`
    margin-right: 10px;
     border-radius: 5px;
`;

export const SpanForm = styled.span`
    font-weight: 700;
    margin-right: 5px;
`;

export const ButtonForm = styled.button`
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    background-color: #ae98e1;
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    &:hover{
        background-color: #5b5bd5;
        transform: scale(1.1);
    }
`;