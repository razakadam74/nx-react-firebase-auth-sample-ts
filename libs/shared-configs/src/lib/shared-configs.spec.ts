import { firebaseConfigs } from '..';

describe('firebaseConfigs', () => {
  it('firebaseConfigs should not be null', () => {
    expect(firebaseConfigs).not.toBeNull();
  });

  it('apiKey should be defined', () => {
    expect(firebaseConfigs.apiKey).toBeDefined();
  });

  it('appId should be defined', () => {
    expect(firebaseConfigs.appId).toBeDefined();
  });

  it('authDomain should be defined', () => {
    expect(firebaseConfigs.authDomain).toBeDefined();
  });

  it('messagingSenderId should be defined', () => {
    expect(firebaseConfigs.messagingSenderId).toBeDefined();
  });

  it('projectId should be defined', () => {
    expect(firebaseConfigs.projectId).toBeDefined();
  });

  it('storageBucket should be defined', () => {
    expect(firebaseConfigs.storageBucket).toBeDefined();
  });
});
