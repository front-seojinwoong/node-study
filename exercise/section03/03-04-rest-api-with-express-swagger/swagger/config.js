export const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'node.js 백엔드 개발 명세서 복습하기',
      version: '1.0.0',
    },
  },
  apis: ['./swagger/*.swagger.js'], // files containing annotations as above
};