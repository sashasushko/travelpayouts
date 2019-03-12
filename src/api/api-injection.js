import * as React from 'react';

const ApiContext = React.createContext();

const ApiProvider = ApiContext.Provider;

function withApi(Component) {
    return class extends React.Component {
        static displayName = `withApi(${Component.displayName || Component.name || "Component"})`;

        static contextType = ApiContext;

        render() {
            return <Component api={this.context} {...this.props} />;
        }
    };
}

export { withApi, ApiProvider };