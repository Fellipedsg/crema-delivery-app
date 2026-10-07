export const c = {
  bg: '#0C0906', surface1: '#16110C', surface2: '#201911', surface3: '#2B2219', line: '#3A2E21',
  gold: '#D4A54A', goldLight: '#F1D18A', goldDark: '#8E6A24', wine: '#7B1424', wineLight: '#D9606E',
  text: '#F4ECDD', muted: '#A89A86', dim: '#6F6455', success: '#4CB376',
  tintGold: '#2E2414', tintWine: '#3A1219', tintGreen: '#16291E', notice: '#22140E', danger: '#2A1015',
};
export const g = {
  gold: ['#F1D18A', '#D4A54A'] as const,
  hero: ['#5E101C', '#140D08'] as const,
  adega: ['#3A0E16', '#16110C'] as const,
  tabacaria: ['#2E2312', '#16110C'] as const,
  clube: ['#E2B95E', '#8E6A24'] as const,
};
export const f = {
  display: 'Cinzel_700Bold', r: 'Inter_400Regular', m: 'Inter_500Medium', s: 'Inter_600SemiBold', b: 'Inter_700Bold',
};
export const brl = (cents: number) =>
  'R$ ' + (cents / 100).toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
