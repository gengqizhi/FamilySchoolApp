/**
 * 主要的业务逻辑
 */

export function fetchHomeName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('New User Name')
    }, 1000);
  });
}
