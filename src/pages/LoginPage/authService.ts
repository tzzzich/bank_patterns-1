import { UserManager, WebStorageStateStore, User } from 'oidc-client-ts';

const settings = {
  // URL IdentityServer
  authority: "http://51.250.46.120:5003", 
  client_id: "client_app", 
  // URL на который IdentityServer перенаправляет после логина
  redirect_uri: "http://localhost:5173/signin-callback",
  // URL куда пользователя перенаправляет после выхода
  post_logout_redirect_uri: "http://localhost:5173/",

  response_type: "code",
  scope: "openid profile api1", 
  userStore: new WebStorageStateStore({ store: window.localStorage }),
};

export const userManager = new UserManager(settings);

// редирект на страницу логина
export const login = async () => {
  try {
    await userManager.signinRedirect();
  } catch (error) {
    console.error('Ошибка при перенаправлении на страницу логина:', error);
  }
};

// функция вызываемая на странице калбэка после входа
export const completeSignIn = async () => {
  try {
    const user: User = await userManager.signinRedirectCallback();
    console.log('Пользователь вошёл:', user);
    localStorage.setItem('userToken', user.access_token);
  } catch (error) {
    console.error('Ошибка при завершении входа:', error);
  }
};

// выход (его еще нет)
export const logout = async () => {
  try {
    await userManager.signoutRedirect();
  } catch (error) {
    console.error('Ошибка при выходе:', error);
  }
};
