import React from 'react'
import Button from '../../../common/Button'
import { useDispatch } from 'react-redux';
import { toggleReadOnly } from '../actions/project';

const ChangeAccessibility = ({sketch, currentAccessType}) => {
    const [accesbility, setAccessibility] = React.useState(currentAccessType);
    const dispatch = useDispatch();
    const newAccessType = !currentAccessType

  const handleSketchAccessibility = () => {
        setAccessibility((prevState) => {
          console.log(prevState);
          const newAccessibility = !accesbility; // Toggle the accessibility state
          console.log(newAccessibility);
      
          dispatch(toggleReadOnly(sketch._id, newAccessType)); // Pass the updated accessibility state
          return { newAccessibility }; // Update the state with the new accessibility value
        });
      }

  return (
    <div>


 {!currentAccessType &&   <div>
      <p>Make ${sketch.name} ${newAccessType}</p>

      <br />

      <ul>
        <li>The other users will not be able to edit your sketch</li>
        <li>Nonetheless, you can always comeback and edit this</li>
      </ul>

      <Button>I have read and understand these changes</Button>
    </div>}

    {currentAccessType &&   <div>
      <p>Make ${sketch.name} ${newAccessType}</p>

      <br />

      <ul>
        <li>The other users will be able to edit your sketch</li>
        <li>Anyone can still see and fork your sketch</li>
        <li>Nonetheless, you can always comeback and edit this</li>
      </ul>

      <Button onClick={handleSketchAccessibility}>I have read and understand these changes</Button>
    </div>}
    </div>
  )
}

export default ChangeAccessibility
