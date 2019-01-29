import React, { Component } from 'react';
import './faqs.scss';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import classnames from 'classnames';

class FAQs extends Component {
    constructor(props) {
        super(props);

        let activeSection =
            props.activeSection || this.props.data.sections[0].section;

        this.state = {
            activeSection,
            filteredData: this.filterData(activeSection),
        };

        this.sectionClick = this.sectionClick.bind(this);
    }

    filterData(section) {
        return this.props.data.articles.filter(
            article => article.section === section
        );
    }

    sectionClick(section) {
        this.setState({
            activeSection: section,
            filteredData: this.filterData(section),
        });
    }

    render() {
        return (
            <div id="faq-component" className="adg-landing-faqs">
                <Row>
                    <Col sm={3}>
                        <Sections
                            sections={this.props.data.sections}
                            sectionClickCallback={this.sectionClick}
                            activeSection={this.state.activeSection}
                        />
                    </Col>
                    <Col sm={9}>
                        <Articles articles={this.state.filteredData} />
                    </Col>
                </Row>
            </div>
        );
    }
}

FAQs.propTypes = {
    data: PropTypes.object,
};

FAQs.defaultProps = {
    data: { articles: [], sections: [] },
};

const Sections = ({ sections, activeSection, sectionClickCallback }) => (
    <ul className="adg-landing-faqs__menu">
        {sections.map((menuItem, index) => (
            <li
                key={index}
                onClick={() => sectionClickCallback(menuItem.section)}
                className={classnames('adg-landing-faqs__menu__item', {
                    'adg-landing-faqs__menu__item--active':
                        activeSection === menuItem.section,
                })}>
                {activeSection === menuItem.section ? (
                    <span className="adg-landing-faqs__menu__link">
                        {menuItem.friendlyName}
                    </span>
                ) : (
                    <a
                        href="#faq-articles"
                        className="adg-landing-faqs__menu__link">
                        {menuItem.friendlyName}
                    </a>
                )}
            </li>
        ))}
    </ul>
);

export const isActive = (activeSection, menuItem, index) =>
    activeSection ? activeSection === menuItem.section : index === 0;

export const Articles = ({ articles }) => (
    <div
        id="faq-articles"
        className="adg-landing-faqs__content adg-landing-faqs__content--active">
        {articles.length ? (
            articles.map(article => (
                <Article
                    key={article.question().props.children}
                    article={article}
                />
            ))
        ) : (
            <h4>No articles to display</h4>
        )}
    </div>
);

class Article extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { isActive: false };

        this.toggleActive = () =>
            this.setState({ isActive: !this.state.isActive });
    }

    render() {
        const {
            article: { question, answer, seldom },
        } = this.props;
        const { isActive } = this.state;
        return (
            <article
                className={classnames('adg-landing-faq-item', {
                    'adg-landing-faq-item--active': isActive,
                    seldom,
                })}>
                <div className="adg-landing-faq-item__q">
                    <section onClick={this.toggleActive}>
                        ... {question()}
                    </section>
                    {isActive && (
                        <div className="adg-landing-faq-item__a">
                            <section>{answer()}</section>
                        </div>
                    )}
                </div>
            </article>
        );
    }
}

export default FAQs;
