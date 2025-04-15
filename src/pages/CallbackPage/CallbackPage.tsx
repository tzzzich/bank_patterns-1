import { useEffect } from 'react';
import { completeSignIn } from '../LoginPage/authService';
import { useNavigate } from 'react-router-dom';

const CallbackPage: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    completeSignIn().then(() => {
      navigate("/main");

    }).catch(error => {
      console.error('Ошибка в callback:', error);
    });
  }, []);

  return <div>Вход в систему...</div>;
};

export {CallbackPage};
