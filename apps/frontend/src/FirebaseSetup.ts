import { firebaseConfigs } from '@nx-react-firebase-auth-sample-ts/shared-configs';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp(firebaseConfigs);
export const firebaseAuth = getAuth();
export default app;