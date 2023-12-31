import { Link } from 'react-router-dom';

import { Button } from '@view/components/Button';
import { Input } from '@view/components/Input';

import { useLoginController } from './useLoginController';

export function Login() {
  const { handleSubmit, register, errors, isLoading } = useLoginController();

  return (
    <>
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900 tracking-[-1px]">
          Entre em sua conta
        </h1>

        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">
            Novo por aqui?
          </span>
          <Link
            to="/register"
            className="tracking-[-0.5px] font-medium text-teal-900"
          >
            Crie uma conta
          </Link>
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="mt-[60px] flex flex-col gap-4"
        noValidate
      >
        <Input
          type="email"
          placeholder="E-mail"
          error={errors.email?.message}
          {...register('email')}
        />

        <Input
          type="password"
          placeholder="Senha"
          error={errors.password?.message}
          {...register('password')}
        />

        <Button type="submit" isLoading={isLoading} className="mt-2">
          Entrar
        </Button>
      </form>
    </>
  );
}
