import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
// import { Box, Tab, Tabs, Typography } from "@mui/material";
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

  // const [currentTabIndex, setCurrentTabIndex] = useState(0);
 
  //   const handleTabChange = (e, tabIndex) => {
  //     console.log(tabIndex);
  //     setCurrentTabIndex(tabIndex);
  //   };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
      <button
        onClick={() => {
          handleClick('');
        }}
      >
        All
      </button>
    </div>
  );



  // return (
  //   <div>
  //     <h2>Choose a Category:</h2>
  //     <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  //     <Tabs value={currentTabIndex} onChange={handleTabChange}>

  //     {categories.map((item) => (
         
  //       <Tab
  //         label="categories" 
  //         key={item._id}
  //         onClick={() => {
  //           handleClick(item._id);
  //         }}
  //       >
  //         {item.name}
  //       </Tab>
  //     ))}
  //     <Tab
  //       onClick={() => {
  //         handleClick('');
  //       }}
  //     >
  //       All
  //     </Tab>

  //     </Tabs>
  //     </Box>


      
  //       {/* TAB Signup Contents */}
  //       {currentTabIndex === 1 && (
  //         <Box sx={{ p: 3 }}>
  //           <Link to="/signup"></Link>
  //         </Box>
  //       )}
 
  //       {/* TAB Home Contents */}
  //       {currentTabIndex === 2 && (
  //         <Box sx={{ p: 3 }}>
  //           <Link to="/"></Link>
  //         </Box>
  //       )}





  //   </div>
  // );


}

export default CategoryMenu;
