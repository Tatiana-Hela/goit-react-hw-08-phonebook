import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { selectFilter } from 'redux/filter/filter-selector';
import { SearchIcon } from '@chakra-ui/icons';
import css from '../Filter/Filter.module.css';
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <FormControl width="350px">
      <FormLabel>Find contacts by name</FormLabel>
      <InputGroup>
        <InputRightElement
          pointerEvents="none"
          children={<SearchIcon color="gray" />}
        />
        <Input
          type="text"
          placeholder="Enter name"
          value={filter}
          onChange={e => dispatch(setFilter(e.target.value))}
        />
      </InputGroup>
    </FormControl>
  );
};

export default Filter;
