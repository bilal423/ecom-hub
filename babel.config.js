module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@app/screens': './app/screens',
          '@app/navigation': './app/navigation',
          '@app/theme': './app/theme',
          '@app/assets': './app/assets',
          '@app/components': './app/components',
          '@app/store':  './app/store',
          '@app/services': './app/services/',
          '@app/constants': './app/constants/'
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
