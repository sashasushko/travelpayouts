import * as React from 'react';
import { withApi } from "../api/api-injection";

const CurrencySign = {
    "rub": "₽"
}

class TopBar extends React.Component {
    state = {
        loading: true,
        "balance": null,
        "next_payout": null,
        "currency": "rub"
    };

    componentDidMount() {
        this.fetch();
    }

    render() {
        const { balance, next_payout, currency } = this.state;

        return (
            <ul className="topbar">
                <li>
                    Баланс
                    <b>{balance} {CurrencySign[currency]}</b>
                </li>
                <li>
                    К выплате
                    <b>{next_payout} {CurrencySign[currency]}</b>
                </li>
            </ul>
        );
    }

    async fetch() {
        try {
            const response = await this.props.api.getAccountState();
            this.setState(response);
        } catch (error) {
            // ToDo
        } finally {
            this.setState({ loading: false });
        }
    }
}

export default withApi(TopBar);