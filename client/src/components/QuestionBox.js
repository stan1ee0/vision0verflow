import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Box = styled.div`
  background-color: #f6f6f6;
  border: 1px solid #d6d6d6;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 18px;
`;

const Description = styled.p`
  margin-top: 8px;
  color: #666;
`;

const QuestionBox = ({ data }) => {
  const { id, title, description } = data;

  return (
    <Box>
      <Link to={`/questions/${id}`}>
        <Title>{title}</Title>
      </Link>
      <Description>{description}</Description>
    </Box>
  );
};

QuestionBox.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default QuestionBox;
