import {Link} from 'react-router-dom';
import {styled} from 'styled-components';
import PropTypes from 'prop-types';

const BoardContainer = styled.div`
  display: grid !important;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px 12px;
`;

const TagCardDiv = styled.div`
  display: flex !important;
  flex-direction: column !important;
  border: 1px solid hsl(210,8%,85%);
  background-color: hsl(0,0%,100%);
  border-radius: 4px;
  padding: 12px;
`;

const TagContainer = styled.div`
  display: flex !important;
  margin-bottom: 12px !important;
  align-items: center !important;
  justify-content: space-between !important;
`;

const TagLink = styled(Link)`
  font-size: 12px;
  color: hsl(205,47%,42%);
  background-color: hsl(205,46%,92%);
  border-color: transparent;
  border-radius: 4px;
`;

const TagDescriptionDiv = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: hsl(210,8%,25%) !important;
  margin-bottom: 12px !important;
`;

export default function UsersBoard() {
  const tags = [
    {
      id: 1,
      name: "visoin",
      description: "Computer vision is an interdisciplinary field that aims to enable computers to interpret and understand visual information from images and videos. It leverages artificial intelligence, machine learning, and image processing techniques to mimic human vision capabilities.",
    },
    {
      id: 2,
      name: "marvel",
      description: "Marvel is a prominent American comic book publisher and entertainment company known for creating a vast array of iconic superhero characters and stories. Founded in 1939 as Timely Publications, the company later became known as Marvel Comics in the 1960s. Since then, it has grown into one of the most influential and successful comic book publishers in the world.",
    },
    {
      id: 3,
      name: "chatgpt",
      description: "ChatGPT is a language model developed by OpenAI, and it is based on the GPT-3.5 architecture. GPT stands for \"Generative Pre-trained Transformer,\" which means it's a deep learning model using the transformer architecture and has been pre-trained on a massive amount of data.",
    },
    {
      id: 4,
      name: "openai",
      description: "OpenAI is an artificial intelligence research organization that aims to develop and promote friendly AI for the benefit of humanity. It was founded in December 2015 by Elon Musk, Sam Altman, Greg Brockman, Ilya Sutskever, John Schulman, and Wojciech Zaremba.",
    }
  ];

  return (
    <BoardContainer>
      {tags.map((tag) => (
        <TagsBox key={tag.id} tag={tag} />
      ))}
    </BoardContainer>
  );
}

function TagsBox({tag}) {
  const tagName = tag.name;
  const tagDescription = tag.description;

  return (
    <TagCardDiv>
      <TagContainer>
        <div>
          <TagLink className="tag">{tagName}</TagLink>
        </div>
      </TagContainer>
      <TagDescriptionDiv>
        {tagDescription}
      </TagDescriptionDiv>
    </TagCardDiv>
  );
}

TagsBox.propTypes = {
  tag: PropTypes.object.isRequired,
};
