module.exports = {
  presets: [
    ['@babel/preset-env',
      {
        targets: {
          node: 'current',
          firefox: '60',
          chrome: '79',
          safari: '11.1',
        },
      },
    ],
  ],
};
