# react-to-outside

Simple React Component to listen to events outside of element.

Add the `onClickOutside` prop to the `Outside` component.

A `onClickInside` prop is also available to use.

```npm/yarn install/add react-to-outside```;

Example: 

```javascript
import Outside from 'react-to-outside';

const ExampleComponent = (props) => {
    const clickOutside = () => {
        alert('outside click');
    }

    return (
        <Outside onClickOutside={(event) => clickOutside(event)}>
            <div>
                <p>
                    Click Outside of me!
                </p>
            </div>
        </Outside>
    )
}
```
