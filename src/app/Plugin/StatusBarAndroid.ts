import { registerPlugin } from '@capacitor/core';

export interface StatusBarPlugin {
  getHeight(): Promise<{ height: number }>;
}

 const StatusBarAndroid = registerPlugin<StatusBarPlugin>('StatusBarAndroid');

export default StatusBarAndroid;