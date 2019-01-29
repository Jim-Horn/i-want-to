import React, { Component } from 'react';
import './code-copy.scss';

export default class CodeCopy extends Component {
    state = { copySuccess: false };
    successDuration = 500;

    copy = () => {
        let range = document.createRange();
        range.selectNode(this.el);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        document.execCommand('copy');
        sel.removeAllRanges();
        this.setState({ copySuccess: true });

        setTimeout(() => {
            this.setState({ copySuccess: false });
        }, this.successDuration);
    };

    render() {
        const { children, successText = 'Copied!' } = this.props;
        return (
            <span className="code-copy">
                <code
                    ref={el => {
                        this.el = el;
                    }}
                    title="click to copy"
                    onClick={this.copy}>
                    {children}
                </code>
                {this.state.copySuccess && (
                    <span className="message">{successText}</span>
                )}
            </span>
        );
    }
}
