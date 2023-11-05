import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { useAuth } from '@app/hooks/useAuth';
import { authService } from '@app/services/authService';
import { ISignInParams } from '@app/services/authService/signin';

const schema = z.object({
  email: z
    .string()
    .min(1, 'E-mail é obrigatório.')
    .email('Informe um e-mail válido.'),
  password: z.string().min(8, 'Senha deve conter pelo menos 8 dígitos.'),
});

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isPending: isLoading, mutateAsync } = useMutation({
    mutationFn: async (data: ISignInParams) => authService.signin(data),
  });

  const { signin } = useAuth();

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);

      signin(accessToken);
    } catch {
      toast.error('Credenciais inválidas.');
    }
  });

  return { handleSubmit, register, errors, isLoading };
}
