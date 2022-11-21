import * as React from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'RouterProvider': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            // 'Footer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}
