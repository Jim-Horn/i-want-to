import React from 'react';
import CodeCopy from '../../components/CodeCopy';
import { sortArticles } from '../../utilities';
export default sortArticles(
    [
        {
            section: 'node',
            question: () => <span>Debug a node script</span>,
            answer: () => (
                <span>
                    <CodeCopy>node --inspect &lt;filename></CodeCopy>
                    <CodeCopy>node --inspect-brk &lt;filename></CodeCopy>
                    <p>
                        Visit about:inspect in chrome and choose the remote
                        target that points to your node instance
                    </p>
                </span>
            ),
        },
    ],
    'question'
);
