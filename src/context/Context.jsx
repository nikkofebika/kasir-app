import { Component, createContext } from "react";

export const RootContext = createContext();

const Provider = RootContext.Provider;
const GlobalProvider = (Childern) => {
    return (
        class ParentProvider extends Component {
            state = {
                order: 3,
                name: 'Okin'
            }

            dispatch = (action) => {
                switch (action.type) {
                    case 'CHANGE_ORDER':
                        if (action.cond === 'plus') {
                            this.setState({ order: this.state.order + 1 })
                        } else {
                            this.setState({ order: this.state.order - 1 })
                        }
                        console.log('state skg', this.state)
                        break;
                    case 'CHANGE_NAME':
                        this.setState({ name: action.newName })
                        break;
                    default:
                        return this.state
                        break;
                }
            }
            render() {
                return (
                    <Provider value={{ state: this.state, dispatch: this.dispatch }}>
                    <Childern />
                </Provider>
                )
            }
        }
    )
}
export default GlobalProvider;