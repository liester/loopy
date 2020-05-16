import React from 'react';
import './Sidebar.scss'
const friends: Array<string> = ['Lauren Beard', 'Esme Sanford', 'Leyla Smith','Shane Fisher','Daisy Bright','Talia Hodge','Carla Hart','Angela Cardenas']
function Sidebar() {
    return (
        <div className="Sidebar">
            {friends.map(friend => {
                return (
                    <div className={'contact'}>
                        {friend}
                    </div>
                )
            })}
        </div>
    );
}

export default Sidebar;
