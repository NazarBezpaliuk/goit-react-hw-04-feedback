import PropTypes from 'prop-types';
import { ContainerBtn, Btn } from './Buttons.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option, index) => {
    return (
      <ContainerBtn>
        <Btn type="button" key={index} name={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Btn>
      </ContainerBtn>
    );
  });
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
