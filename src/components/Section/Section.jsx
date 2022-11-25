
import PropTypes from 'prop-types';
import { ContainerTitle, Title } from './Section.styled';

export const Section = ({ title, children }) => {
    return (
      <ContainerTitle>
        <Title>{title}</Title>
        {children}
      </ContainerTitle>
    );
  }


export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};
