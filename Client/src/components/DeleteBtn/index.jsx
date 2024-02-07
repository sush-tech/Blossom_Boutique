// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
import CloseIcon from '@mui/icons-material/Close';
function DeleteBtn(props) {
  return (
    <span {...props} role="button" tabIndex="0">
      <CloseIcon/>
    </span>
  );
}

export default DeleteBtn;
