import { createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { auth } from './firebase';

/**
 * Register a new user with email and password.
 *
 * @param email - User email address
 * @param password - User password
 * @returns Firebase UserCredential for the newly created user
 */
export function signUp(email: string, password: string): Promise<UserCredential> {
  return createUserWithEmailAndPassword(auth, email, password);
}

/**
 * Sign in an existing user with email and password.
 *
 * @param email - User email address
 * @param password - User password
 * @returns Firebase UserCredential for the signed in user
 */
export function signIn(email: string, password: string): Promise<UserCredential> {
  return signInWithEmailAndPassword(auth, email, password);
}
