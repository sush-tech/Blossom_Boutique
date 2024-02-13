import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART , ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import './style.css';
import { Link } from 'react-router-dom';
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';


const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {

      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <ShoppingCartIcon/>
      </div>
    );
  }

  // return (
  //   <div className="cart">
  //     <div className="close" onClick={toggleCart} >
  //       <CloseIcon/>
  //     </div>
  //     <h2>Shopping Cart</h2>
  //     {state.cart && state.cart.length ? (
  //       <div>
  //         {state.cart.map((item) => (
  //           <CartItem key={item._id} item={item} />
  //         ))}

  //         <div className="flex-row space-between">
  //           <strong>Total: ${calculateTotal()}</strong>

  //           {Auth.loggedIn() ? (
  //             <button onClick={submitCheckout}>Checkout</button>
  //           ) : (
  //             <span>
  //                <Link to="/login">(log in to check out)</Link>
  //             </span>
  //           )}
  //         </div>
  //       </div>
  //     ) : (
  //       <h3>
  //         <span role="img" aria-label="shocked">
  //           😱
  //         </span>
  //         You haven't added anything to your cart yet!
  //       </h3>
  //     )}
  //   </div>
  // );
  return (
    
    <React.Fragment>
      <ShoppingCartIcon/> 
      <Button variant="contained" onClick={handleClickOpen}>
      Open Cart
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Shopping Cart
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
          </IconButton>
          <DialogContent dividers>
          {/* <h2>Shopping Cart</h2> */}
      {state.cart && state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
          
            <strong>Total: ${calculateTotal()}</strong>
            <DialogActions>
              {Auth.loggedIn() ? (
              <Button autoFocus variant="contained" onClick={submitCheckout}>Checkout</Button>
            ) : (
              <Button onClick={handleClose} component={Link} to="/login">
                 (log in to check out)
              </Button>
            )}
        </DialogActions>
           
      </div>
        
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your cart yet!
        </h3>
      )}
      </DialogContent>
        
      </BootstrapDialog>
    </React.Fragment>
  );
}

export default Cart;
