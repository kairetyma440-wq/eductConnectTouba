// Configuration lue depuis le fichier .env (variables préfixées VITE_).
export const config = {
  appName: import.meta.env.VITE_APP_NAME || 'ÉduConnect',
  schoolName: import.meta.env.VITE_SCHOOL_NAME || 'École Iba Sène',
  apiUrl: import.meta.env.VITE_API_URL || '',
  demoOtp: import.meta.env.VITE_DEMO_OTP || '123456',
};
