import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/advice.store';

export const useAppDispatch: () => AppDispatch = useDispatch;
