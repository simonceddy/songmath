import { useState } from 'react';
import defaultSettings from '../support/defaultSettings';

export default function useSettings() {
  const [settings, setSettings] = useState(defaultSettings);

  const resetSettings = () => setSettings(defaultSettings);

  const setOption = (key, value) => {
    if (defaultSettings[key] !== undefined) {
      setSettings({ [key]: value, ...settings });
    }
  };

  return {
    settings,
    setOption,
    resetSettings
  };
}
