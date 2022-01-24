import styled from '@emotion/styled';

export const SearchbarStyles = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 52px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: 400 22px/22px;
  font-size: 22px;
  border: none;
  outline: none;
  padding: 0 15px 0 15px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 46px;
  height: 46px;
  border: 0;
  background-image: url('https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/50/000000/external-search-smart-farm-vitaliy-gorbachev-flat-vitaly-gorbachev.png');

  background-size: 65%;
  background-repeat: no-repeat;
  background-position: center;

  opacity: 0.8;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;
