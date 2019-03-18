import * as React from "react";
import { withApi } from "../../api/api-injection";
import { formatPrice } from "../../utils/format-price";
import "./Balance.css";

const CurrencySign = {
  rub: "₽"
};

class Balance extends React.Component {
  state = {
    loading: true,
    balance: 0,
    next_payout: 0,
    currency: "rub"
  };

  componentDidMount() {
    this.fetch();
  }

  render() {
    const { balance, next_payout, currency } = this.state;

    return (
      <ul className="balance">
        <li className="balance-item">
          <span className="label">Баланс</span>
          <b className="value">
            {formatPrice(balance)} {CurrencySign[currency]}
          </b>
        </li>
        <li className="balance-item">
          <span className="label">К выплате</span>
          <b className="value">
            {formatPrice(next_payout)} {CurrencySign[currency]}
          </b>
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

export default withApi(Balance);
