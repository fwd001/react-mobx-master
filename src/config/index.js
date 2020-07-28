// baseURL配置
const servers = {
  development: "",
  testing: "",
  production: "",
};
console.log(process);

export const serverUrl = servers[process.env.VUE_APP_ENV];
