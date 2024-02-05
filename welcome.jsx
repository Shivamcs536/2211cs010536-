import React from 'react';
const WelcomeMessage = (props) => {
return (
<div>
<h2 className='text-primary'>

Hello,
<span style = {{color:'green'}} > {props.name}!</span>`
</h2>
</div>
);
}
export default WelcomeMessage;