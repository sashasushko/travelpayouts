import * as React from 'react';
import { withApi } from "../api/api-injection";
import Filter from './Filter';
import Card from './Card';

class ServiceList extends React.Component {
    state = {
        loading: true,
        items: [],
        search: ""
    };

    componentDidMount() {
        this.fetch();
    }

    render() {
        const { search } = this.state;
        const items = this.filterItems();

        return (
            <React.Fragment>
                <Filter value={search} onChange={this.handleChange} onReset={this.handleReset} />
                <ul>
                    {items.map(item => (<li key={item.title}>
                        <Card {...item} />
                    </li>))}
                </ul>
            </React.Fragment>
        );
    }

    handleChange = (evt) => {
        this.setState({ search: evt.target.value });
    }

    handleReset = () => {
        this.setState({ search: "" });
    }

    filterItems() {
        const { search, items } = this.state;

        if (search.trim().length === 0 || items.length === 0) {
            return items;
        }

        return items.filter(({ title }) => title.trim().toLowerCase().includes(search.trim().toLowerCase()))
    }

    async fetch() {
        try {
            const response = await this.props.api.getBonuses();
            this.setState({ items: response });
        } catch (error) {
            // ToDo
        } finally {
            this.setState({ loading: false });
        }
    }
}

export default withApi(ServiceList);
