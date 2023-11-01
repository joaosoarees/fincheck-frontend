import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { authService } from '../../../app/services/authService';
import { SignInParams } from '../../../app/services/authService/signin';

const schema = z.object({
  email: z.string()
    .min(1, 'E-mail é obrigatório.')
    .email('Informe um e-mail é válido.'),
  password: z.string()
    .min(8, 'Senha deve conter pelo menos 8 dígitos.')
});

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const { isPending: isLoading, mutateAsync } = useMutation({
    mutationFn: async (data: SignInParams) => authService.signin(data),
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data);
    } catch {
      toast.error('Credenciais inválidas.');
    }
  });

  return { handleSubmit, register, errors, isLoading }
}
