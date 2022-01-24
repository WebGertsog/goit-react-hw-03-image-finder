import PropTypes from 'prop-types';
import { ButtonWrapper, ButtonLoadMore } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <ButtonWrapper>
      <ButtonLoadMore type="button" onClick={onClick}>
        Load more
      </ButtonLoadMore>
    </ButtonWrapper>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
