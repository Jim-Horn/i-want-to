import React from 'react';
import { sortArticles } from '../../../utilities';
export default sortArticles([
    {
        section: 'css',
        question: () => <span>foo</span>,
        answer: () => (
            <span>
                <p>bar</p>
            </span>
        ),
    },
]);
