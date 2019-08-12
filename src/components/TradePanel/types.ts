import { Trade, ReleaseBitcoinActionCreator } from '../../store/trades/types';
import { RouteComponentProps } from 'react-router-dom';

export interface IStateProps {
  trade: Trade | null;
}

export interface IDispatchProps {
  releaseBitcoin: () => ReleaseBitcoinActionCreator
}

// export interface IRouterProps {
//   tradeId: string
// }

// export type IProps = IStateProps & IDispatchProps & RouteComponentProps<IRouterProps> 

export type IProps = IStateProps & IDispatchProps 
