import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { selectFilter } from 'redux/filter/filter-selector';
import { SearchIcon } from '@chakra-ui/icons';
import {
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <FormControl width="350px" m="0 auto">
      <InputGroup>
        <InputRightElement
          pointerEvents="none"
          children={<SearchIcon color="gray" />}
        />
        <Input
          type="text"
          placeholder="Find contacts by name"
          value={filter}
          onChange={e => dispatch(setFilter(e.target.value))}
        />
      </InputGroup>
    </FormControl>
  );
};

export default Filter;
