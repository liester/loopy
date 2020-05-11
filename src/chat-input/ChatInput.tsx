import React from 'react';
import './ChatInput.scss'

type Props = {
    onChange(event: any): void;
}

export type Ref = HTMLDivElement

export default React.forwardRef<Ref, Props>((props, ref) => {
    return (
        <div ref={ref} className={"ChatInput"}>
            <input onChange={props.onChange} placeholder={"Message Someone"}/>
        </div>
    );
})
