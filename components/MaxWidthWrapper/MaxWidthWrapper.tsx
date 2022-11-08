import styled from 'styled-components';
import { QUERIES } from '../../styles/styleUtils';

const MaxWidthWrapper = styled.div`
  position: relative;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
  max-width: min(100%, (1600px + 32px * 2));
  @media ${QUERIES.tabletAndUp} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export default MaxWidthWrapper;
