import Message from "./Message";
import Table from "./Table";
import styled from 'styled-components';

const StyledMain = styled.main`
  padding-block: 40px;

  table {
  }
`;

const Main = (props) => {
  const { filteredData } = props;
  return (
    <StyledMain>
      {filteredData.length === 0 && <Message {...props} />}
      <Table {...{ filteredData }} />
    </StyledMain>
  );
};

export default Main;