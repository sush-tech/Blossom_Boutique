import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import { Tab, Tabs } from '@mui/material';
import Box from '@mui/material/Box';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {

  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div>
{/* <header>
<img src={`/images/${image}`}/>
</header> */}

{/* todo: add pictures and use them below tabs once clicked on category */}
<Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>


<Tabs >
      {categories.map((item) => (
        <Tab
        textColor="secondary"
          key={item._id}
          label={item.name}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </Tab>
      ))}
      <Tab
      label="ALL"
        onClick={() => {
          handleClick('');
        }}
      >
        All
      </Tab>
      </Tabs> 
      
      
      </Box>
      </Box>
      </div>
  );


}

export default CategoryMenu;

