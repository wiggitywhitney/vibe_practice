const isTest = process.env.NODE_ENV === 'test';

export default {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { node: 'current' },
        modules: isTest ? 'commonjs' : false,
      },
    ],
    ['@babel/preset-react', { runtime: 'automatic' }]
  ],
}; 